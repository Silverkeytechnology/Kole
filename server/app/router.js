module.exports = function(app) {

  //Route HTTP calls to /students to the student router
  app.use('/api/students', require('./routes/students.router'));


  //handle all other requests via AngularJS

}
