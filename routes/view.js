var express = require('express');
var router = express.Router();
// var authenticate = require ('../api/authenticate');





/* GET home page. */
router.get('/home',function(req, res, next) {
  res.render('home', { title: 'Contacts' });
});


/* GET login page. */
router.get('/', function (req, res, next) {
	res.render('login', { title: 'Contacts' });
});

module.exports = router;
