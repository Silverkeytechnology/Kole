let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

let server = require(process.cwd() + '/server/bin/server');
let Student = require(process.cwd() + '/server/app/models/student.model.js');

var assert = require('chai').assert;

module.exports = function () {
  this.World = require('../support/world').World;

  let student, res;
  let self = this;

  this.Given(/^there are students in the system$/, function(callback) {
    //code heree
    callback(null, 'pending');
  });

  this.When(/^the client requests for a list of studnts$/, function(callback) {
    //code heree
    callback(null, 'pending');
  });

  this.Then(/^the response should be the list of all students in the system$/, function(callback) {
    //code heree
    callback(null, 'pending');
  });
}
