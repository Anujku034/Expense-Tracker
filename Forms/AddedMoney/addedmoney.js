const submit = document.getElementById("Submit");

submit.addEventListener("click", function () {

    const amount = document.getElementById("Amount").value;

    const dateTime = document.getElementById("dateTime").value;


    // Get existing added money
    let addedMoney = JSON.parse(localStorage.getItem("addedMoney")) || [];


    // Add new entry
    addedMoney.push({
        amount: amount,
        dateTime: dateTime
    });


    // Save updated data
    localStorage.setItem("addedMoney", JSON.stringify(addedMoney));


    // Go back to Dashboard
    window.location.href = "../../Dashboard/dashboard.html";

});