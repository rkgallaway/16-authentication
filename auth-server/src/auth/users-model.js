'use strict';

const util = require('util');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String},
  role: {type: String, required:true, default:'user', enum:['admin','editor','user'] },
});

users.pre('save', function(next) {
  bcrypt.hash(this.password,10)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next();
    })
    .catch( error => {throw error;} );
});

/**
 * Basic authentication
 *
 * @param {*} auth
 * @returns query
 */
users.statics.authenticateBasic = function(auth) {
  let query = {username:auth.username};

  return this.findOne(query)
    .then( user => {
      if (user && user.comparePassword(auth.password)) {
        return user;
      }
      return false;
    })
    .catch(console.error);
};

/**
 * Compare a plain text password against the hashed one we have saved
 *
 * @param {*} password
 * @returns caompared password
 */
users.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password)
    .then(valid => {
      if (valid) {
        return this;
      } else {
        return null;
      }
    });
};


/**
 *Generate a JWT from the user id and a secret
 *
 * @returns returns confirmed auth token
 */
users.methods.generateToken = function() {
  let tokenData = {
    id:this._id,
    capabilities: (this.acl && this.acl.capabilities) || [],
  };
  return jwt.sign(tokenData, process.env.SECRET || 'changeit' );
};

module.exports = mongoose.model('user', users);
