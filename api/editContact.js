var jsonfile = require('jsonfile');
const fs = require('fs');


edit = (req, res ,next)=> {

    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        indexToEdit :req.body.index_to_edit
    }
        console.log(response.email);
        console.log(response.indexToEdit);
        var indexTo=response.indexToEdit-1;

        var arr=[];
        var noteString = fs.readFileSync('list_users.json');
        arr=JSON.parse(noteString);
        var l=arr.length -1;
        var elementtoedit = l-indexTo;
        // console.log(elementtoedit)
        arr.splice(elementtoedit, 1, {"first_name" :`${response.first_name}`, "last_name" : `${response.last_name}`, "email" : `${response.email}`});
            console.log('test');
                 fs.writeFileSync('list_users.json',JSON.stringify(arr));
                 res.json({msg: "user is edited"});  
        
};


module.exports = {
    edit
}