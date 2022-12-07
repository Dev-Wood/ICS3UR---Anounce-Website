function loginFunction(){
	//Gets data from input box
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	
	//Sends alert if Username or Password fields are blank
	if (username == ""){
		alert("Error: Username or Password field was blank")
		return
	}
	else if (password == ""){
		alert("Error: Username or Password field was blank")
		return
	}
	else 

		console.log(username);
		console.log(password);
	
}