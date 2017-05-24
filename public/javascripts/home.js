function contactList() {

	axios.post('/api/list')
		.then(function (response) {
			console.log(response);
			var html = '';
			for (var i = 0; i < response.data.result.length; i++) {
				// response.data.result.reverse().forEach(function (l, i) {
				var em = response.data.result[i].email;
				var fn = response.data.result[i].first_name;
				var ln = response.data.result[i].last_name;
				html += `<tr id=row${i + 1}>`;
				html += '<td>' + (i + 1) + '</td>';
				html += `<td id=rowfn${i + 1} value=${response.data.result[i].first_name}>` + response.data.result[i].first_name + '</td>';
				html += `<td id=rowln${i + 1} value=${response.data.result[i].last_name}>` + response.data.result[i].last_name + '</td>';
				html += `<td id=rowmail${i + 1} value=${response.data.result[i].email}>` + response.data.result[i].email + '</td>';
				html += '<td>' + `<button type="button" id=${i + 1} onclick="editCon(${i + 1},'${fn}','${ln}','${em}')">` + "EDIT" + `</button>` + `</td>`;
				html += '<td>' + `<button type="button" id=${i + 1} onclick="deleteCon('${fn}','${ln}','${em}')">` + "DELETE" + `</button>` + `</td>`;
				html += '</tr>';
				
			};
			html += '</br>';
			html += '<button value="Submit" onclick="SignOff()">Sign Off</button>'
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
			if (response) {
			console.log('add rsep',response);
			}
		})
		.then(function () {
			contactList();
		})
		.catch(function (error) {
			console.log(error);
		});
}




function deleteCon(fname,lname,email) {
	var deleteId;
	axios.post('/api/delete', {
		fname: fname,
		lname : lname,
		deleteemail: email
	})
		.then(function (response) {

			if (response) {
				console.log(response);
				contactList();
			}
		})
		.catch(function (error) {
			console.log(error);
		});
}

function editCon(i, fn, ln, em) {

	// var em = em;

	var html = '';
	html += '<tr>';
	html += '<td>' + (i) + '</td>';
	html += '<td>' + `<input type = "text" name = "first_name" id="fnedit" placeholder=${fn}>` + '</td>'
	html += '<td>' + `<input type = "text" name = "last_name" id="lnedit" placeholder=${ln}>` + '</td>'
	html += '<td>' + `<input type = "text" name = "email" id="emailedit" placeholder=${em}>` + '</td>'
	html += '<td>' + `<button value = "Submit" onclick="addAfterEdit('${em}')" >Submit</button>` + '</td>'
	html += '</tr>';

	document.getElementById(`row${i}`).innerHTML = html;
}

function addAfterEdit(om) {
	var firstName = document.getElementById("fnedit").value;
	var lastName = document.getElementById("lnedit").value;
	var email = document.getElementById("emailedit").value;
	var oem = om;
	// console.log('eeee ', email);
	axios.post('/api/edit', {
		first_name1: firstName,
		last_name1: lastName,
		email1: email,
		oldemail : oem
	})
		.then(function (response) {
			console.log('user edited');
			contactList();
		})
}

function SignOff() {
	axios.post('/api/logout')
		.then(function (response) {
			if (response.data.isLogged == false) {
				location.replace('/')
				alert('you logged out');
		}
	
	})
}

contactList();


