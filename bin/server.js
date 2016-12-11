//Note: We use ECMAScript 6(ES6) or higher for all Devs at Silverkeytechnology

//Setting up handles
let express = require('express');
let app = express();
let dotenv = require('dotenv');
let mongoose = require('mongoose');

//load database configurations
let configFile = '.env';
if (process.env.NODE_ENV == "test") {
  configFile = '.env.test';
}
dotenv.load({ path: configFile });                //this will read the.env or .env.test file, parse the contents, and assign it to process.env

//setup a connection to the server using mongoose
mongoose.connect(process.env.MONGODB);
let db = mongoose.connection;
//listen for connection erros
db.on('error', console.error.bind(console, 'connection error:', chalk.red('✗')));
//open connection
db.on('open', function() {
  //we are connected
  console.log("Connected correcly to the database server", chalk.green('✓'));
});


//Setup application server to listen for connections
let server = app.listen(process.env.PORT, function(err, callback) {
  if (err) {
    console.log(err);
  }

  console.log('Kole is listening on port '+ process.env.PORT + '!', chalk.green('✓'));
});

//Expose the express server object so it can be accessed outside this module
module.exports = server;
