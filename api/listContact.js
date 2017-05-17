var users_list = require('../list_users.json');

module.exports = {
    list: function (req, res, next) {
        var contacts = users_list;
        res.json({status: "Success", result: contacts})
    }
}
