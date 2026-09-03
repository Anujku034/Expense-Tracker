// Here I am going to handle login button
// If someone clicks on the login button, first verify the user
// and then login.

document.getElementById("login").addEventListener("click", function () {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some(function (user) {
        return user.username === username && user.password === password;
    });

    if (userExists) {

        // Save username of the logged-in user
        localStorage.setItem("loggedInUser", username);

        // Go to Dashboard
        window.location.href = "../Dashboard/dashboard.html";

    } else {

        alert("Invalid username or password");

    }

});

const RegisterButton = document.getElementById("RegisterButton");

RegisterButton.addEventListener("click", function () {
    window.location.href = "../Register.html";
});