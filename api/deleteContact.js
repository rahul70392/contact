var jsonfile = require('jsonfile');
const fs = require('fs');

del = (req, res ,next)=> {

    resp = req.body.deleteId;
    response=resp-1;

        var arr=[];
        var noteString = fs.readFileSync('list_users.json');
         arr=JSON.parse(noteString);
    
                   
                    var l=arr.length -1;
                  
                    var elementtopop = l-response;
                    
                    console.log(arr[elementtopop]);
                    arr.splice(elementtopop,1);
                    
                    fs.writeFileSync('list_users.json',JSON.stringify(arr));
                    res.json({msg: "user is deleted"});  
            

}

module.exports = {
    del
}