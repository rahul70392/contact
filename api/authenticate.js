var db = require('../mongoConfig');

authenticate = (req, res, next) => {

	db.Accounts.findOne({
		email: req.body.email
	}, function (err, user) {

		if (err) throw err;

		if (!user) {
			res.json({ success: false, message: 'Authentication failed. User not found.' });
		} else if (user) {

			// check if password matches
			if (user.password != req.body.password) {
				res.json({ success: false, message: 'Authentication failed. Wrong password.' });
			} else {


				req.session.email = req.body.email;
				req.session.isLogged = true;
				console.log('inside auth', req.session.email);
				// if user is found and password is right
				// create a token
				// var token = jwt.sign(user, 'secret123');
				// tokenOut.token = token;
				// console.log('a',a);
				// return the information including token as JSON
				res.json({
					success: true,
					message: 'user logged in!',
					// token: token,
		
				});
			}

		}

	});
}

module.exports = {
	authenticate
}