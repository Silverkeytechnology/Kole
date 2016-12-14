/*----------Tests  for the Kole API for api/students routes------------------
-----
-----------------------------------------------------------------------------
*/
//setup handles
let mongoose = require('mongoose');
let Student = require(process.cwd() + '/server/app/models/student.model');

//hook into the helper file for helper methods
let helperFile = require('../helper');
let request = helperFile.request;
let cleanDatabase = helperFile.cleanDatabase;
let expect = helperFile.expect;

//Tests for routes start here my dear friends
describe('Students Router', function () {

  //this runs before each test is executed in this block
  beforeEach(function (done) {

    //before each get test, clean db and create new story
    cleanDatabase(function () {
      Student.create({firstName: "Skole",lastName: "Banda", gender: "Male"}, function (err, student) {
        if(err) return err;
      });
    });

    //test GET /api/students
    describe('GET /api/students', function(){
      //test getting all students
      it('should retrieve all students', function (done) {
        request()
          .get('/api/students')
          .end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.be.eql(1);
            done();
          });
      });

      //test getting student by id
      it('should return a single student for GET /api/students/:id', function (done) {
        let mockStudent = new Student({firstName: "Skole",lastName: "Banda", gender: "Male"});
        mockStudent.save(function (err, newStudent){
          request()
            .get('/api/students/' + newStudent._id)
            .end(function (err, res) {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('firstName');
              res.body.should.have.property('lastName');
              res.body.should.have.property('gender');
              res.body.should.have.property('_id').eql(res.body._id);
              done();
            });
        });
      });

    });

  });

  //Test
});
