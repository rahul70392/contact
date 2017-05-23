var db = require('../mongoConfig');
var jwt = require('jsonwebtoken');

var tokenOut = {
};

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
				console.log('inside auth',req.session.email);
				// if user is found and password is right
				// create a token
				var token = jwt.sign(user, 'secret123');
				tokenOut.token = token;
				// console.log('a',a);
				// return the information including token as JSON
				res.json({
					success: true,
					message: 'Enjoy your token!',
					token: token,
					// email: user.email,
					// password:user.password
				});
			}

		}

	});
}




add = (req, res, next) => {
	console.log('tokenn',req.session.email);
	contactRes = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email
	}


	db.Contacts.findOne({ email: contactRes.email })
		.then(function (response) {
			if (!response) {
				var contact = new db.Contacts({
					"admin": req.session.email,
					"first_name": contactRes.first_name,
					"last_name": contactRes.last_name,
					"email": contactRes.email
				});
				contact.save()
					.then(function (response) {
						console.log(response);
						res.send({ 'status': 'added successfully' })
					})
					.catch(function (e) {
						res.send({ 'status': 'failure', Error: e });
					});
			}
			else {
				res.send({ 'status': 'contact already exist' })
			}
		})
		.catch(function (e) {
			res.send({ 'status': e })
		})
};




addUser = (req, res, next) => {

	contactRes = {
		email: req.body.email,
		password: req.body.password
	}


	db.Accounts.findOne({ email: contactRes.email })
		.then(function (response) {
			if (!response) {
				// console.log('over jwt', contactRes.password);
				var token = jwt.sign({ data: contactRes }, 'secret123');
				console.log(token);
				var contact = new db.Accounts({
					"token": token,
					"password": contactRes.password,
					"email": contactRes.email
				});
				contact.save()
					.then(function (response) {
						console.log(response);
						res.send({ 'status': 'added successfully' })
					})
					.catch(function (e) {
						res.send({ 'status': 'failure', Error: e });
					});
			}
			else {
				res.send({ 'status': 'contact already exist' })
			}
		})
		.catch(function (e) {
			res.send({ 'status': e })
		})
};



list = (req, res, next) => {

	console.log('inside list', req.session.email);
	db.Contacts.find({ "admin": req.session.email})
		.then((response) => {

			if (response) {
				res.json({ status: "Success list", result: response })
			}
			else {
				res.json({ status: "no list" })
			}
		}).catch(function (e) {
			console.log('erre')
		})

}


del = (req, res, next) => {
	resp = req.body.deleteemail;
	Contacts.findOneAndRemove({ "email": resp }).then(function () {
		res.json({ status: "contact deleted" })
	})
}




edit = (req, res, next) => {

	resp = {
		first_name: req.body.first_name1,
		last_name: req.body.last_name1,
		email: req.body.email1

	}
	Contacts.findOneAndUpdate({ first_name: resp.first_name, last_name: resp.last_name, email: resp.email })
		.then(function (response) {
			if (response) {
				Contacts.update({ first_name: resp.first_name, last_name: resp.last_name, email: resp.email })
				res.json({ msg: "user is edited" });
			}
		})

};


module.exports = {
	edit,
	del,
	authenticate,
	list,
	addUser,
	add
}

