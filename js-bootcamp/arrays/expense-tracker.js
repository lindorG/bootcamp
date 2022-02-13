const account = {
    name: "Jeff Bezos",
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            descrption: description,
            amount: amount
        })
    }
    ,
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        }) 
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        accountBalance = totalIncome - totalExpenses

            return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income, $${totalExpenses} in expenses.`
    }
}

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total of all expenses -> "Jeff Bezos has $1250 in expenses."
// (forEach "Get the amount object and add it onto the variable")



account.addIncome("Job", 1000)
account.addExpense("Rent", 950)
account.addExpense("Coffee", 2)
console.log(account.getAccountSummary())