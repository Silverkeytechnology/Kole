let Student = require('../models/student.models');

//Return All Students
exports.getAllStudents = function (req, res) {
  Student.find(req.query, function(err, students){
    res.send(students);
  })
}

//Return Single Student by ID
exports.findStudentById = function (req, res) {
  let id = req.params.id;
  Student.findOne({'_id':id}, function (err, result) {
    return res.send(result);
  });
}

//Create Student record
