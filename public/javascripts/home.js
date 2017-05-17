function contactList() {

  axios.get('/api/list')
    .then(function (response) {
      var html = '';
      // for(var i=0;i < response.data.result.length; i++)
      response.data.result.reverse().forEach(function (l, i) {
       
        html += `<tr id=row${i + 1}>`;
        html += '<td>' + (i + 1) + '</td>';
        html += `<td id=rowfn${i + 1} value=${l.first_name}>` + l.first_name + '</td>';
        html += `<td id=rowln${i + 1} value=${l.last_name}>` + l.last_name + '</td>';
        html += `<td id=rowmail${i + 1} value=${l.email}>` + l.email + '</td>';
        html += '<td>' + `<button type="button" id=${i + 1} onclick="editCon(${i + 1})">` + "EDIT" + `</button>` + `</td>`;
        html += '<td>' + `<button type="button" id=${i + 1} onclick="deleteCon(${i + 1})">` + "DELETE" + `</button>` + `</td>`;
        html += '</tr>';
      });
      document.getElementById('contact_list').innerHTML = html;


    })
    .catch(function (error) {
      console.log(error);
    });
}



function addCon() {
  var firstName = document.getElementById("fn").value;
  var lastName = document.getElementById("ln").value;
  var email = document.getElementById("email").value;
  axios.post('/api/add', {
    first_name: firstName,
    last_name: lastName,
    email: email
  })
    .then(function (response) {
      if(response){
      console.log(response);
      }
      

    })
    .then(function (){
      contactList();
    })
    .catch(function (error) {
      console.log(error);
    });
}




function deleteCon(i) {
  var deleteId;
  axios.post('/api/delete', {
    deleteId: i
  })
    .then(function (response) {

if(response){
  console.log(response);
  
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function editCon(i)
{

        var html='';
         html+='<tr>';
         html += '<td>' + (i) + '</td>';
         html+='<td>'+`<input type = "text" name = "first_name" id="fnedit" placeholder=${fn}>`+'</td>'
         html+='<td>'+`<input type = "text" name = "last_name" id="lnedit" placeholder=${ln}>`+'</td>'
         html+= '<td>'+`<input type = "text" name = "email" id="emailedit" placeholder=${email}>`+'</td>'
         html+= '<td>'+`<button value = "Submit" onclick="addAfterEdit(${i})" >Submit</button>`+'</td>'
         html += '</tr>';
        //  var pas=`row`
         document.getElementById(`row${i}`).innerHTML = html;
}

function addAfterEdit(i){
   var firstName = document.getElementById("fnedit").value;
  var lastName = document.getElementById("lnedit").value;
  var email = document.getElementById("emailedit").value;
  // console.log(i);
  // console.log('eeee',email);
   axios.post('/api/edit', {
    first_name: firstName,
    last_name: lastName,
    email: email,
    index_to_edit:i
  })
    .then(function (response) {
      console.log(response);
     
    })
  }
// contactList();