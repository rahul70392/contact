var Contacts = require('../mongoConfig')

del = (req, res, next) => {
	resp = req.body.deleteemail;
	Contacts.findOneAndRemove({ "email": resp }).then(function () {
		res.json({ status: "contact deleted" })
	})
}

module.exports = {
	del
}