module.exports = function(app) {

  console.log('From router: process.cwd() ', process.cwd());
  //Route HTTP calls to /students to the student router
  app.use('/api/students', require('./routes/students.router'));
}
