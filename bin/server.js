//Note: We use ECMAScript 6(ES6) or higher for all Devs at Silverkeytechnology

//Setting up handles
let express = require('express');
let app = express();
let crossenv = require('cross-env');

let port = 3000;

let configFile = '.env';
if (process.env.NODE_ENV == "test") {
  configFile = '.env.test';
}

//Setup server to listen for connections
app.listen(port, function(err, callback) {
  if (err) {
    console.log(err);
  }

  console.log("App listening at port : " + port);
});

//Setup routes
app.get('/api', function(req, res) {
  res.send("This Home Page for You!!");
})
