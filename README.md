# 💰 Expense Tracker

A simple and user-friendly **Expense Tracker web application** built using **HTML, CSS, and JavaScript**.

The application allows users to register and log in, manage their money, track expenses, see their current balance, and organize transactions by month.

---

## 🚀 Features

### 🔐 User Authentication
- User registration
- User login
- Username and password validation
- Logout functionality
- Prevents duplicate usernames

### 💵 Money Management
- Add money to your balance
- Track money taken by other people
- Track daily expenses
- Automatically calculate current balance

### 📊 Dashboard
- Displays total money added
- Displays total expenses
- Displays current balance
- Shows username of the logged-in user
- Displays user initials in the profile icon

### 📅 Monthly Tracking
- Select a month using the month selector
- View transactions for the selected month
- Automatically update:
  - Total expenses
  - Total money added
  - Money taken
  - Current balance

### 🗑️ Delete Transactions
- Delete individual transactions
- Automatically update the dashboard after deletion

### 💾 Data Storage
- Uses browser `localStorage`
- No external database required
- Data remains available after refreshing the page

---

## 🛠️ Technologies Used

- **HTML5** – Structure of the application
- **CSS3** – Styling and responsive layout
- **JavaScript** – Application logic and functionality
- **LocalStorage** – Storing users and transaction data

---

## 📁 Project Structure

```text
Expense-Tracker/
│
├── Dashboard/
│   ├── dashboard.html
│   ├── dashboard.css
│   └── dashboard.js
│
├── Forms/
│   ├── AddedMoney/
│   │   ├── addedmoney.html
│   │   ├── addedmoney.css
│   │   └── addedmoney.js
│   │
│   ├── Expense/
│   │   ├── expense.html
│   │   ├── expense.css
│   │   └── expense.js
│   │
│   └── TakeMoney/
│       ├── takemoney.html
│       ├── takemoney.css
│       └── takemoney.js
│
├── LoginPage/
│   ├── TrackerSystem.html
│   ├── TrackerSystem.css
│   ├── TrackerSystem.js
│   └── RupeesImg.jpg
│
├── Register.html
├── Register.css
├── Register.js
└── index.html
