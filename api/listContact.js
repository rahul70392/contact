// var users_list = require('../list_users.json');
var Contacts = require('../mongoConfig')



list = (req, res, next) => {
	Contacts.find().select().then((response) => {

		if (response) {
			res.json({ status: "Success list", result: response })
		}
	}).catch(function (e) {
		console.log('erre')
	})

}

module.exports = {
	list
}
