//Note: We use ECMAScript 6(ES6) or higher for all Devs at Silverkeytechnology

//Setting up handles
let express = require('express'),
    app = express(),
    dotenv = require('dotenv'),
    mongoose = require('mongoose'),
    chalk = require('chalk'),
    bodyParser = require('body-parser'),
    path = require('path'),
    cors = require('cors');

//mount a few middleware to handle client HTTP requests
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(path.join(__dirname, '../../public')));

//app.set('views', path.resolve('./') + '/client/views');

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
 res.status(code || 500).json({"error": message});
}
//load routing tables(configure routes), this is our custom middleware to ensure we have all the routing in place
require('../app/router')(app)

//load database configurations
if (process.env.NODE_ENV == "live") {
  mongoose.connect(process.env.MONGODB_LIVE);
}
else {
  let configFile = './server/config/.env';
  if (process.env.NODE_ENV == "test") {
    configFile = './server/config/.env.test';
  }
  else if (process.env.NODE_ENV == "devs") {
    configFile = './server/config/.env.devs';
  }
  dotenv.load({ path: configFile });                //this will read the.env or .env.test file, parse the contents, and assign it to process.env

  //setup a connection to the server using mongoose
  mongoose.connect(process.env.MONGODB);
}

let dbConn = mongoose.connection;
dbConn.on('error', console.error.bind(console, 'Database connection error for:', process.env.MONGODB, chalk.red('✗')));
dbConn.once('open', function () {
    // we're connected!
    console.log("Connected correctly to database server", chalk.green('✓'));
});
//If the Node process ends, close the Mongoose connection to the DB
process.on('SIGINT', function(){
  dbConn.close(function(){
    console.log('Database Server connection closed through App termination!', chalk.red('X'));
    process.exit(0);
  });
});

var server = app.listen(process.env.PORT, function () {
  console.log('Your app listening on port ' + process.env.PORT + '!', chalk.green('✓'));
});

//Expose the express server object so it can be accessed outside this module
module.exports = server;
