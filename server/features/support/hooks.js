let Student = require(process.cwd() + '/server/app/models/student.model');

module.exports = function () {
  this.Before(function (scenario, callback) {
    Student.remove({}, function(err) {
      if (err) {
        callback(err);
      }
      else {
        callback();
      }
    });


  });
}
