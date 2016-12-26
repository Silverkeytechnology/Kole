let router = require('express').Router();

//Redirect all requests to home to Index page
router.route('/').get('/', function(req, res, next) {
  res.render('view', 'index.html');
});
