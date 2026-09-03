// =====================================================
// USERNAME PART
// =====================================================

const username = localStorage.getItem("loggedInUser");

document.getElementById("usrname").textContent = username;


// =====================================================
// USER ICON
// =====================================================

const nameParts = username.trim().split(/\s+/);

let initials = nameParts[0][0];

if (nameParts.length > 1) {
    initials += nameParts[1][0];
}

document.getElementById("userIcon").textContent = initials.toUpperCase();


// =====================================================
// CALENDAR
// =====================================================

const calender = document.getElementById("calender");
const showDate = document.getElementById("showDate");


// =====================================================
// LISTS
// =====================================================

const takenMoneyList = document.getElementById("takenMoneyList");
const addedMoneyList = document.getElementById("addedMoneyList");
const expenseList = document.getElementById("expenseList");


// =====================================================
// DASHBOARD VALUES
// =====================================================

const TotalBalance = document.getElementById("Total-Balance");
const CurrentBalance = document.getElementById("Current-Balance");
const invested = document.getElementById("invested");


// =====================================================
// SHOW SELECTED MONTH
// =====================================================

function showSelectedMonth() {

    const selectedMonth = calender.value;


    // -------------------------------------------------
    // Show selected month
    // -------------------------------------------------

    showDate.textContent = "Total spent in this month " + selectedMonth;


    // -------------------------------------------------
    // Get data from localStorage
    // -------------------------------------------------

    const takenMoney =
        JSON.parse(localStorage.getItem("takenMoney")) || [];

    const addedMoney =
        JSON.parse(localStorage.getItem("addedMoney")) || [];

    const expenses =
        JSON.parse(localStorage.getItem("expenses")) || [];


    // -------------------------------------------------
    // Filter Take Money according to month
    // -------------------------------------------------

    const selectedTakenMoney = takenMoney.filter(function (money) {

        return money.dateTime.substring(0, 7) === selectedMonth;

    });


    // -------------------------------------------------
    // Filter Add Money according to month
    // -------------------------------------------------

    const selectedAddedMoney = addedMoney.filter(function (money) {

        return money.dateTime.substring(0, 7) === selectedMonth;

    });


    // -------------------------------------------------
    // Filter Expenses according to month
    // -------------------------------------------------

    const selectedExpenses = expenses.filter(function (expense) {

        return expense.dateTime.substring(0, 7) === selectedMonth;

    });


    // -------------------------------------------------
    // Clear previous data
    // -------------------------------------------------

    takenMoneyList.innerHTML = "";

    addedMoneyList.innerHTML = "";

    expenseList.innerHTML = "";


    // =================================================
    // TAKE MONEY
    // =================================================

    selectedTakenMoney.forEach(function (money) {

        // Main card
        const entry = document.createElement("div");

        entry.classList.add("taken-money-entry");


        // Name
        const name = document.createElement("p");

        name.classList.add("taken-money-name");

        name.textContent = money.name;


        // Amount
        const amount = document.createElement("p");

        amount.classList.add("taken-money-amount");

        amount.textContent = "₹" + money.amount;


        // Date and time
        const dateTime = document.createElement("p");

        dateTime.classList.add("taken-money-date");

        dateTime.textContent = money.dateTime;


        // Delete button
        const deleteButton = document.createElement("button");

        deleteButton.classList.add("delete-button");

        deleteButton.textContent = "🗑️";


        // Delete functionality
        deleteButton.addEventListener("click", function () {

            let takenMoney =
                JSON.parse(localStorage.getItem("takenMoney")) || [];


            // Find this particular entry
            const index = takenMoney.findIndex(function (item) {

                return item.name === money.name &&
                    item.amount === money.amount &&
                    item.dateTime === money.dateTime;

            });


            // Delete the entry
            if (index !== -1) {

                takenMoney.splice(index, 1);

            }


            // Save updated data
            localStorage.setItem(
                "takenMoney",
                JSON.stringify(takenMoney)
            );


            // Refresh the dashboard
            showSelectedMonth();

        });


        // Put everything inside entry
        entry.appendChild(name);

        entry.appendChild(amount);

        entry.appendChild(dateTime);

        entry.appendChild(deleteButton);


        // Put entry inside Take Money list
        takenMoneyList.appendChild(entry);

    });


    // =================================================
    // ADD MONEY
    // =================================================

    selectedAddedMoney.forEach(function (money) {

        // Main card
        const entry = document.createElement("div");

        entry.classList.add("added-money-entry");


        // Amount
        const amount = document.createElement("p");

        amount.classList.add("added-money-amount");

        amount.textContent = "+" + "₹" + money.amount;


        // Date and time
        const dateTime = document.createElement("p");

        dateTime.classList.add("added-money-date");

        dateTime.textContent = money.dateTime;


        // Put everything inside entry
        entry.appendChild(amount);

        entry.appendChild(dateTime);


        // Put entry inside Add Money list
        addedMoneyList.appendChild(entry);

    });


    // =================================================
    // EXPENSE
    // =================================================

    selectedExpenses.forEach(function (expense) {

        // Main card
        const entry = document.createElement("div");

        entry.classList.add("expense-entry");


        // Expense name
        const name = document.createElement("p");

        name.classList.add("expense-name");

        name.textContent = expense.expenseName;


        // Amount
        const amount = document.createElement("p");

        amount.classList.add("expense-amount");

        amount.textContent = "-" + "₹" + expense.amount;


        // Date and time
        const dateTime = document.createElement("p");

        dateTime.classList.add("expense-date");

        dateTime.textContent = expense.dateTime;


        // Put everything inside entry
        entry.appendChild(name);

        entry.appendChild(amount);

        entry.appendChild(dateTime);


        // Put entry inside Expense list
        expenseList.appendChild(entry);

    });


    // =================================================
    // CALCULATE TOTAL ADDED MONEY
    // =================================================

    let total = 0;

    selectedAddedMoney.forEach(function (money) {

        total += Number(money.amount);

    });


    // =================================================
    // CALCULATE TOTAL TAKEN MONEY
    // =================================================

    let takenTotal = 0;

    selectedTakenMoney.forEach(function (money) {

        takenTotal += Number(money.amount);

    });


    // =================================================
    // CALCULATE TOTAL EXPENSE
    // =================================================

    let expen = 0;

    selectedExpenses.forEach(function (expense) {

        expen += Number(expense.amount);

    });


    // =================================================
    // CALCULATE CURRENT BALANCE
    // =================================================

    const currentBalance = total - takenTotal - expen;


    // =================================================
    // DISPLAY VALUES
    // =================================================

    TotalBalance.textContent = "Balance In ₹" + total;

    CurrentBalance.textContent = "Current Balance ₹" + currentBalance;

    invested.textContent = "₹" + expen;

}


// =====================================================
// WHEN MONTH IS CHANGED
// =====================================================

calender.addEventListener("change", function () {

    showSelectedMonth();

});


// =====================================================
// TAKE MONEY BUTTON
// =====================================================

const TakemoneyButton =
    document.getElementById("Add-taken-money-from-whom");

TakemoneyButton.addEventListener("click", function () {

    window.location.href =
        "../Forms/TakeMoney/takemoney.html";

});


// =====================================================
// EXPENSE BUTTON
// =====================================================

const ExpenseButton =
    document.getElementById("Expense-Add-button");

ExpenseButton.addEventListener("click", function () {

    window.location.href =
        "../Forms/Expense/expense.html";

});


// =====================================================
// ADD MONEY BUTTON
// =====================================================

const AddMoneyButton =
    document.getElementById("Money-Add-button");

AddMoneyButton.addEventListener("click", function () {

    window.location.href =
        "../Forms/AddedMoney/addedmoney.html";

});


// =====================================================
// RUN WHEN DASHBOARD OPENS
// =====================================================

showSelectedMonth();

const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", function () {

    // Remove logged-in user
    localStorage.removeItem("loggedInUser");

    // Go to login page
    window.location.href = "../LoginPage/TrackerSystem.html";

});