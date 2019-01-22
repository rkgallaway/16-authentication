'use strict';

const util = require('util');
const User = require('./users-model.js');
// console.log(`User: ${util.inspect(User)}`);
module.exports = (req, res, next) => {
  try {
    let [authType, encodedString] = req.headers.authorization.split(/\s+/);
    // BASIC Auth  ... Authorization:Basic ZnJlZDpzYW1wbGU=

    switch(authType.toLowerCase()) {
      case 'basic':
        return _authBasic(encodedString);
      default:
        return _authError();
    }

  } catch(e) {
    return _authError();
  }

  /**
   * Basic Authentication
   *
   * @param {*} str
   * @returns authenticated user
   */
  function _authBasic(str) {
    let base64Buffer = Buffer.from(str,'base64'); // <Buffer 01 02...>
    let bufferString = base64Buffer.toString(); // john:mysecret
    let [username,password] = bufferString.split(':');  // variables username="john" and password="mysecret"
    let auth = {username,password};  // {username:"john", password:"mysecret"}

    return User.authenticateBasic(auth)
      .then( user => _authenticate(user) );
  }

  /**
   * Authenticates user and assigns token
   *
   * @param {*} user
   */
  function _authenticate(user) {
    if ( user ) {
      req.user = user;
      req.token = user.generateToken();
      next();
    }
    else {
      _authError();
    }
  }

  function _authError() {
    next({status: 401, statusMessage: 'Unauthorized', message: 'Invalid User ID/Password'});
  }

};

