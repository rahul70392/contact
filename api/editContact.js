// var jsonfile = require('jsonfile');
// const fs = require('fs');
var Contacts = require('../mongoConfig')


edit = (req, res ,next)=> {

    resp = {
        first_name: req.body.first_name1,
        last_name: req.body.last_name1,
        email: req.body.email1
      
	 }
	 Contacts.findOneAndUpdate({ first_name: resp.first_name, last_name: resp.last_name, email: resp.email })
	.then(function (response){
		if (response) {
			Contacts.update({ first_name: resp.first_name, last_name: resp.last_name, email: resp.email })
			res.json({ msg: "user is edited" });
		  }
	})
		 

      //   console.log(response.email);
      //   console.log(response.indexToEdit);
      //   var indexTo=response.indexToEdit-1;

      //   var arr=[];
      //   var noteString = fs.readFileSync('list_users.json');
      //   arr=JSON.parse(noteString);
      //   var l=arr.length -1;
      //   var elementtoedit = l-indexTo;
      //   // console.log(elementtoedit)
      //   arr.splice(elementtoedit, 1, {"first_name" :`${response.first_name}`, "last_name" : `${response.last_name}`, "email" : `${response.email}`});
      //       console.log('test');
      //            fs.writeFileSync('list_users.json',JSON.stringify(arr));
      //            res.json({msg: "user is edited"});  
        
};


module.exports = {
    edit
}