var express = require('express');
var router = express.Router();
var addContact = require('../api/addContact')
var listContact = require('../api/listContact')
var deleteContact = require('../api/deleteContact.js')
var editContact = require('../api/editContact.js')


router.post('/add', addContact.add)
router.get('/list', listContact.list)
router.post('/delete', deleteContact.del)
router.post('/edit',editContact.edit)


module.exports = router;
