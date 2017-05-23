var mongoose = require('mongoose')
mongoose.Promise= require('bluebird')
mongoose.connect('mongodb://localhost:27017/contacts')

var schema1 = new mongoose.Schema({
	 admin : String,
    first_name:String ,
    last_name:String,
    email:String
});

var schema2 = new mongoose.Schema({
	token: String,
	password : String,
	email: String
});

var Contacts = mongoose.model('Contacts', schema1);
var Accounts = mongoose.model('Accounts', schema2);

module.exports = {
	Contacts,
	Accounts
}
