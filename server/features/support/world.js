//World is an isolated context for each scenario,
//exposed to the hooks and steps as this.
//The default world constructor is: function World () {}
//and it can be overriden.
//World is a constructor function with utility properties,
//destined to be used in step definitions
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require(process.cwd() + '/server/bin/server');
//inject chaiHttp middleware so chai can easily make http requests
chai.use(chaiHttp);
//setup handle for student model
let Student = require(process.cwd() + '/server/app/models/student.model');

//setup the world context for cucumber step definitions to use
module.exports.World = function (callback) {

  this.send = undefined;
  this.get = undefined;
//helper function to make and send post request for us
  this.makeAndSendPost = function (route, data) {
    var thePost = chai.request(server).post(route);
    var theSend = thePost.send(data);
    this.send = theSend;
  }

//helper method to make a get request for us
  this.makeGetRequest = function (route) {
    this.get = chai.request(server).get(route);
    return this.get;
  }
}

this.setupStudent = function (studentInfo, myCallback) {
  //post
  //firstName: Mwansa
  //lastName: Banda
  //gender: Female
  //Grab the ID from res.body._id

  this.makeAndSendPost('/api/students', studentInfo);
  this.send.end(function (err, res) {
    $this.response = res;
    $this.studentId = $this.response.body._id;
    myCallback();
  });
}
