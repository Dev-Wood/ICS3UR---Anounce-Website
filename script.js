const user = ["user1", "user2", "user3", "user4"];
const password = ["password1", "password2", "password3", "password4"];
const grade = ["gr9", "gr10", "gr11", "gr12"];
const gender = ["male", "female", "other", "male"];
const club = ["hackclub", "deca", "film", "robotics"];

let userLength = user.length;
let passwordLength = password.length;

function loginFunction() {
	//Gets data from input box
	let enteredUser = document.getElementById("username").value;
	let enteredPassword = document.getElementById("password").value;

	//Sends alert if Username or Password fields are blank
	if (enteredUser == "" || enteredPassword == "") {
		alert("Error: Username or Password field was blank")
		return
	}
	else
		//Compares entered username to one from array
		for (let i = 0; i < userLength; i++) {
    	if (enteredUser == user[i] && enteredPassword == password[i]) {
				console.log(user[i]);
				console.log(password[i]);
				location.href = '/teacher.html';
				return
			} 
		}
		alert("Error: Username or Password was incorrect")
}