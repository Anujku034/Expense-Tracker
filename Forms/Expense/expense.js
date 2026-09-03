const submit = document.getElementById("Submit");

submit.addEventListener("click", function () {

    const expenseName = document.getElementById("name").value;
    const amount = document.getElementById("Amount").value;
    const dateTime = document.getElementById("dateTime").value;

    const Amount = Number(amount);

    // Get added money
    const addedMoney = JSON.parse(localStorage.getItem("addedMoney")) || [];

    let totalAddedMoney = 0;

    addedMoney.forEach(function (money) {
        totalAddedMoney += Number(money.amount);
    });


    // Get existing expenses
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    let totalExpenses = 0;

    expenses.forEach(function (expense) {
        totalExpenses += Number(expense.amount);
    });


    // Calculate current balance
    const currentBalance = totalAddedMoney - totalExpenses;


    // Check balance
    if (currentBalance >= Amount) {

        expenses.push({
            expenseName: expenseName,
            amount: amount,
            dateTime: dateTime
        });

        localStorage.setItem("expenses", JSON.stringify(expenses));

        window.location.href = "../../Dashboard/dashboard.html";

    } else {

        alert("Your current expense is greater than your current balance.");

        window.location.href = "../../Dashboard/dashboard.html";
    }

});