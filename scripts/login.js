//Setting arrays for user information
const user = ["user1", "user2", "user3", "user4"];
const password = ["password1", "password2", "password3", "password4"];
const grade = ["gr9", "gr10", "gr11", "gr12"];
const gender = ["male", "female", "other", "male"];
const club = ["hackclub", "deca", "film", "robotics"];

//Creates a variable that is the length of the user array
let userLength = user.length;

//Login function triggered on button press
function loginFunction() {
	//Gets data from input boxes
	let enteredUser = document.getElementById("username").value;
	let enteredPassword = document.getElementById("password").value;

	//Sends alert if Username or Password fields are blank
	if (enteredUser == "" || enteredPassword == "") {
		alert("Error: Username or Password field was blank")
		return
	}
	else
		//Runs a loop that loops for the length of the arrays
		for (let i = 0; i < userLength; i++) {
			//verifies entered user with each set of usernames & passwords
    	if (enteredUser == user[i] && enteredPassword == password[i]) {
				location.href = '/teacher.html';
				//ends function after redirect if the login info is correct
				return
			} 
		}
		//sends Alert if the fields are filled, but wrong
		alert("Error: Username or Password was incorrect")
}