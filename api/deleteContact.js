var db = require('../mongoConfig');

del = (req, res, next) => {
	respm = req.body.deleteemail;
	respf = req.body.fname;
	respl = req.body.lname;
	db.Contacts.findOneAndRemove({ admin: req.session.email, first_name: respf, last_name: respl, email: respm }).then(function () {
		res.json({ status: "contact deleted" })
	})
}

module.exports = {
	del
}