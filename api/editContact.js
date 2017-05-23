var db = require('../mongoConfig');

edit = (req, res, next) => {

	resp = {
		first_name: req.body.first_name1,
		last_name: req.body.last_name1,
		email: req.body.email1
	}

	// console.log('inside edit',resp);

	db.Contacts.findOneAndUpdate({ admin: req.session.email, first_name: resp.first_name, last_name: resp.last_name, email: resp.email })
		.then(function (response) {
			if (response) {
				db.Contacts.update({ admin: req.session.email, first_name: resp.first_name, last_name: resp.last_name, email: resp.email })
				res.json({ msg: "user is edited" });
			}
		})

};

module.exports = {
	edit
}