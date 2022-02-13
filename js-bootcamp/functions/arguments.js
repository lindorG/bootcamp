// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = "anonymous", score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge Area

let getTip = function (total = 0, tipPercent = .2) {
    return `Your total is: $${total * tipPercent+ total}`
}

let final = getTip(40, .25)
console.log(final)

let name = "Jen"
console.log(`Her name is ${name}`)