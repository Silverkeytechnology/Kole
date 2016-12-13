module.exports = function(app) {

  //Route HTTP calls to /students to the student router
  app.use('/students', require('./routes/students.router');
}
