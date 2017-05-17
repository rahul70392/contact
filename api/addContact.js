// var jsonfile = require('jsonfile');
var Contacts = require('../mongoConfig')
// const fs = require('fs');


add = (req, res, next) => {

	contactRes = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email
	}


	Contacts.findOne({ email: contactRes.email })
		.then(function (response) {
			if (!response) {
				var contact = new Contacts({
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
				res.send({ 'status': 'email already exist' })
			}
		})
		.catch(function (e) {
			res.send({ 'status': e })
		})


	
};


module.exports = {
	add
}