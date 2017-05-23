var express = require('express');
// var passport = require('passport');
var router = express.Router();
// var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
// var request = require('request');



var addContact = require('../api/server')
var listContact = require('../api/server')
var deleteContact = require('../api/server')
var editContact = require('../api/server')
var authenticate = require('../api/server')
var addUser = require('../api/server')

router.post('/add',addContact.add)
router.post('/list', listContact.list)
router.post('/delete', deleteContact.del)
router.post('/edit', editContact.edit)
router.post('/authenticate', authenticate.authenticate)
router.post('/adduser', addUser.addUser)


module.exports = router;
