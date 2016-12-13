let Student = require('../models/student.model');

//Return All Students
exports.getAllStudents = function (req, res) {
  Student.find(req.query, function(err, students){
    return res.json(students);
  })
}

//Return Single Student by ID
exports.findStudentById = function (req, res) {
  let id = req.params.id;
  Student.findOne({'_id':id}, function (err, result) {
    return res.json(result);
  });
}

//Create Student record
