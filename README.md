![CF](http://i.imgur.com/7v5ASc8.png) LAB 16
=================================================

## Lab 16 Authentication

### Author: Ryan Gallaway and Fletcher LaRue

### Links and Resources

[![Build Status](https://www.travis-ci.com/rkgallaway/16-authentication.svg?branch=master)](https://www.travis-ci.com/rkgallaway/16-authentication)

* [repo](https://github.com/rkgallaway/16-authentication)
* [travis](https://www.travis-ci.com/rkgallaway/16-authentication)
* [back-end](https://lab16-authentication-rg-fl.herokuapp.com)
* [front-end](localhost:3000)

#### Documentation
* [swagger](http://xyz.com) (API assignments only)
* [jsdoc](http://xyz.com) (All assignments)

### Modules
#### `modulename.js`
##### Exported Values and Methods

## Assignment
###### Requirements
* Create a code/data path map of the authentication system on a whiteboard
* Print and document the code/data path from the source code provided 
* **CODE:** Protect the `/book` and `/book/:id` routes by requiring user authentication

###### Testing
* POST to /signup to create a new user
* POST to /signin to login as a user (use basic auth)
* Need tests for auth middleware and the routes
  * Does the middleware function (send it a basic header)
  * Do the routes assert the requirements (signup/signin)
  * Are the book routes protected properly?
* Ensure that you use supergoose instead of mongo/express
* Tests should include:



### Setup
#### `.env` requirements
* `PORT` - Port defined in ENV
* `MONGODB_URI` - mongodb://heroku_zw9r2x3d:ken4i81qlbunmhhguu1a6r9lif@ds151180.mlab.com:51180/heroku_zw9r2x3d

#### Running the app
* `npm i` to install dependencies
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.
  
### Testing
Tests can be found in the `__tests__` directory:
`__tests__/<file to be tested>.test.js`

Where `<file to be tested>` is the name of the file that the test file applies to.

All testing for this class was done with Jest: 
* [Jest docs](https://jestjs.io/docs/en/getting-started)

Instructions for replicating the tests for this project are as follows:

* Clone the repo.
* Create a node runtime environment

    ```JavaScript
    npm init
    ```
    This will create a `package.json` file, a `package-lock.json` file.

* Install Jest

    ```JavaScript
    npm i jest
    ```

* Run jest

    ```JavaScript
    npm jest --verbose --coverage
    ```
    It is useful to bind this to the command:
    ```JavaScript
    npm test
    ```
    To do this, manually edit your package.json to include the following under the "scripts" attribute:
    ```Javascript
    "scripts": {
        "test": "jest --verbose --coverage",
        "test-watch": "jest --watchAll --verbose --coverage"
    }
    ```
    `test-watch` will re-run tests when the file is saved


### Dependencies

* Jest: `npm i jest` 
    * testing
    * [docs](https://jestjs.io/docs/en/getting-started)
* JSDoc: `npm i jsdoc`
    * documentation
    * [docs](http://usejsdoc.org/)
* cors: `npm i cors`
    * enabling CORS
    * [docs](https://www.npmjs.com/package/cors)
* dotenv: `npm i dotenv`
    * loading environment variables
    * [docs](https://www.npmjs.com/package/dotenv)
* ejs: `npm i ejs`
    * Embedded JavaScript templates
    * [docs](https://www.npmjs.com/package/ejs)
* express: `npm i express`
    * Web framework for node.
    * [docs](https://www.npmjs.com/package/express)
* method-override: `npm i method-override`
    * Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
    * [docs](https://www.npmjs.com/package/method-override)
* mongodb-memory-server: `npm i mongodb-memory-server`
    * Programmatically creates a MongoDB Server for testing
    * [docs](https://www.npmjs.com/package/mongodb-memory-server)
* mongoose: `npm i mongoose`
    * MongoDB object modeling tool
    * [docs](https://www.npmjs.com/package/mongoose)
* mongoose-schema-jsonschema: `npm i mongoose-schema-jsonschema`
    * create json schema from Mongoose schema
    * [docs](https://www.npmjs.com/package/mongoose-schema-jsonschema)
* morgan: `npm i morgan`
    * HTTP request logger middleware for node.js
    * [docs](https://www.npmjs.com/package/morgan)
* pg: `npm i pg`
    * PostgreSQL client for Node.js
    * [docs](https://www.npmjs.com/package/pg)
* superagent: `npm i superagent`
    * Node.js HTTP request library
    * [docs](https://www.npmjs.com/package/superagent)

### UML
![UML](assets/lab16-uml.jpg)
