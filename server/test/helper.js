//server handles
let server = require(process.cwd() + '/server/bin/server');
//db handles
let mongoose = require('mongoose');
let DatabaseCleaner = require('database-cleaner');
let databaseCleaner = new DatabaseCleaner('mongodb');

//Assertion handles
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let expect = require('chai').expect;
chai.use(chaiHttp);

//runs before all tests in this block
before(function(done) {
  mongoose.connection.on('connected', done);
});

//clean database
cleanDatabase = function(callback) {
  databaseCleaner.clean(mongoose.connections[0].db, function() {
    callback();
  });
}

//Public exports
module.exports = {
  server,
  request: function (){
    return chai.request(server);
  },
  cleanDatabase: cleanDatabase,
  expect: expect
};
