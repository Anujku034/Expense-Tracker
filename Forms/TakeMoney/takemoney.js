const submit = document.getElementById("Submit");

submit.addEventListener("click", function () {

    const name = document.getElementById("name").value;
    const amount = document.getElementById("Amount").value;
    const dateTime = document.getElementById("dateTime").value;


    // Check all fields
    if (name === "" || amount === "" || dateTime === "") {
        alert("Please fill all the fields");
        return;
    }


    // Get existing data
    const addedMoney =
        JSON.parse(localStorage.getItem("addedMoney")) || [];

    const takenMoney =
        JSON.parse(localStorage.getItem("takenMoney")) || [];

    const expenses =
        JSON.parse(localStorage.getItem("expenses")) || [];


    // Calculate total added money
    let totalAdded = 0;

    addedMoney.forEach(function (money) {
        totalAdded += Number(money.amount);
    });


    // Calculate total taken money
    let totalTaken = 0;

    takenMoney.forEach(function (money) {
        totalTaken += Number(money.amount);
    });


    // Calculate total expenses
    let totalExpense = 0;

    expenses.forEach(function (expense) {
        totalExpense += Number(expense.amount);
    });


    // Calculate current balance
    const balance = totalAdded - totalTaken - totalExpense;


    // Check balance
    if (balance >= Number(amount)) {

        // Add new taken money
        takenMoney.push({
            name: name,
            amount: amount,
            dateTime: dateTime
        });


        // Save data
        localStorage.setItem(
            "takenMoney",
            JSON.stringify(takenMoney)
        );


        // Go back to Dashboard
        window.location.href =
            "../../Dashboard/dashboard.html";

    } else {

        alert("Insufficient balance");
        window.location.href =
            "../../Dashboard/dashboard.html";

    }

});