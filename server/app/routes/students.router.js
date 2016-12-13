let router = require('express').Router();

let controller = require('../controllers/students.controller');

router.route('/')
  //Get All students
  .get(controller.getAllStudents)
  //Add a new student
  .post(controller.createStudent)
router.route('/:id')
  //GET a specific student
  .get(controller.findStudentById)
  //Update student record
  .put(controller.updateStudent)
  //Delete Student record
  .delete(controller.deleteStudent)

  module.exports = router;
