var express = require('express');
var router = express.Router();
var auth = function (req, res, next) {
	if (req.session && req.session.isLogged)
		return next();
	else
		return res.redirect('/');
};



// router.get('/my-account', auth, function (req, res, next) {
// 	res.render('my-account', { title: 'Token | Wallet', session: req.session });
// });


router.get('/home',auth,function(req, res, next) {
	res.render('home', { title: 'Contacts', session: req.session } )
});


/* GET login page. */
router.get('/', function (req, res, next) {
	res.render('login', { title: 'Contacts' });
});

router.get('/logout', auth, function (req, res, next) {
	req.session.destroy();
	res.redirect('/');
});

module.exports = router;
