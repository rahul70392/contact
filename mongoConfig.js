var mongoose = require('mongoose')
mongoose.Promise= require('bluebird')
mongoose.connect('mongodb://localhost:27017/contacts')

var schema =new mongoose.Schema({
    first_name:String ,
    last_name:String,
    email:String
});

var Contacts = mongoose.model('Contacts',schema);

module.exports = Contacts;