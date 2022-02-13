let myAccount = {
    name: "Gordon Ramsay",
    expenses: 0,
    income: 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has a current balance of $${balance}. The account received $${account.income} in income and $${account.expenses} in expenses.`
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let resetAccount = function (account, amount) {
    account.expenses = account.expenses * amount
    account.income = account.income * amount
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount, 0)
console.log(getAccountSummary(myAccount))


// addIncome

// resetAccount

// getAccountSummary
// Account for Andrew has $900. $100 in income. $100 in expenses.

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary