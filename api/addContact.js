var db = require('../mongoConfig');

add = (req, res, next) => {
	// console.log('tokenn', req.session.email);
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

module.exports = {
	add
}