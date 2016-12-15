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
    //code here
    new Student({'firstName': 'John','lastName': 'Banda','gender': 'Male'}).save();
    //if need for a promise arises add it here
    callback();
  });

  this.When(/^the client requests for a list of students$/, function(callback) {
    //code here
    chai.request(server)
    .get('/api/students')
    .end((err, res) => {
      if (err) throw err;
      self.res = res;
      callback();
    });
  });

  this.Then(/^the response should be the list of all students in the system$/, function(callback) {
    //code here
    assert.equal(self.res.status, 200);
    assert.isArray(self.res.body);
    //find ways of asserting that it contains the most relevant fields and types
    callback();
  });
}
