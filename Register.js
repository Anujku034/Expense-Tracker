// Handle Register button
const RegisterButton = document.getElementById("RegisterButton");

RegisterButton.addEventListener("click", function () {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;


    // Check if all fields are filled
    if (username === "" || password === "" || confirmPassword === "") {
        alert("Please fill all the fields");
        return;
    }


    // Check whether passwords match
    if (password !== confirmPassword) {
        alert("Password does not match");
        return;
    }


    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];


    // Check whether username already exists
    const userExists = users.some(function (user) {
        return user.username === username;
    });


    if (userExists) {
        alert("Username already exists");
        return;
    }


    // Add new user
    users.push({
        username: username,
        password: password
    });


    // Save users in localStorage
    localStorage.setItem("users", JSON.stringify(users));


    // Registration successful
    alert("Registration successful");


    // Go back to Login page
    window.location.href = "./LoginPage/TrackerSystem.html";

});