

function userLogin() {
	var email = document.getElementById("loginEmail").value;
	var password = document.getElementById("loginPassword").value;
	axios.post('/api/authenticate', {
		email: email,
		password: password
	})
		.then(function (response) {
			if (response.data.success === true) {
				location.replace('/home')

			}//end of if
		})
}

function userSignUp() {
	var email = document.getElementById("signUpEmail").value;
	var password = document.getElementById("signInPassword").value;
	axios.post('/api/addUser', {
		email: email,
		password: password
	})
		.then(function (response) {
			if (response) {
				console.log('at front end', response.config.data);
				var html = '';
				html += '<p>Congratulations , you are registered!!</p>'
				html += '<p>Please sign in</p>'
				html += '<input type="text" name="email" id="loginEmail" placeholder="Enter email">'
				html += '<input type="text" name="Password" id="loginPassword" placeholder="Enter password">'
				html += '<button value="Submit" onclick="userLogin()">Login</button>'
				document.getElementById(`afterSignUp`).innerHTML = html;
			}
		})
}







