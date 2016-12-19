module.exports = function(app) {

  //Route call to home angular
  app.get('/', function(req, res){
    res.sendFile(process.cwd() + '/client/views/index.html');
  });

  //Route HTTP calls to /students to the student router
  app.use('/api/students', require('./routes/students.router'));


  //handle all other requests via AngularJS

}
