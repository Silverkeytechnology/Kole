//use mongoose to design schema of models
let mongoose = require('mongoose');

let studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Undisclosed'],
    default: 'Undisclosed'
  }
});

let Student = mongoose.model('Student', studentSchema);

module.exports = Student;
