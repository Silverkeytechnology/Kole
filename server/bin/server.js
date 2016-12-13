//Note: We use ECMAScript 6(ES6) or higher for all Devs at Silverkeytechnology

//Setting up handles
let express = require('express'),
    app = express(),
    dotenv = require('dotenv'),
    mongoose = require('mongoose'),
    chalk = require('chalk'),
    bodyParser = require('body-parser');

//mount a few middleware to handle client HTTP requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));



//load database configurations
let configFile = './server/config/.env';
if (process.env.NODE_ENV == "test") {
  configFile = './server/config/.env.test';
}
dotenv.load({ path: configFile });                //this will read the.env or .env.test file, parse the contents, and assign it to process.env

//setup a connection to the server using mongoose
  mongoose.connect(process.env.MONGODB);

let dbConn = mongoose.connection;
//listen for when open connection
dbConn.on('connected', function() {

  //we are connected
  console.log("Connected correcly to the database server", chalk.green('✓'));
  //load routing tables
  /*(require('../app/router')(app, dbConn), function(){
    console.log("Loaded routing tables successfully!", chalk.green('✓'));
  })*/

});
//listen for connection erros
dbConn.on('error', console.error.bind(console, 'Database server connection error:', chalk.red('X')));
//When the connection is disconnected
dbConn.on('disconnected', function() {
  console.log("App lost connection to the database server! ",chalk.red('X'));
});
//When we are reconnected
dbConn.on('reconnected', function(){
  console.log('Connection to the Database Server is restored!', chalk.green('✓'));
});
//If the Node process ends, close the Mongoose connection to the DB
process.on('SIGINT', function(){
  dbConn.close(function(){
    console.log('Database Server connection closed through App termination!', chalk.red('X'));
    process.exit(0);
  });
});



//Setup application server to listen for connections
let server = app.listen(process.env.PORT, function(err, callback) {
  if (err) {
    console.log('Kole App Server falied to connect !', chalk.green('X'), ' Error: '+ err);
  }

  console.log('Kole App Server correcly connected, and is listening on port '+ process.env.PORT + '!', chalk.green('✓'));
});

//load routing tables(configure routes), this is our custom middleware to ensure we have all the routing in place
require('../app/router')(app)

//Expose the express server object so it can be accessed outside this module
module.exports = server;
