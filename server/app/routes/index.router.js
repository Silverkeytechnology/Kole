let router = require('express').Router();

//Redirect all requests to home to AngularJS Index page
router.route('/').get('/', function(req, res, next) {
  res.render('view', 'index.html');
});
