let num = 103.95

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))


let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)


let makeGuess = function (guess) {
    let min = 1
    let max = 10
    let result = (Math.floor(Math.random() * (max - min + 1)) + min)
    return result === guess
}

console.log(makeGuess(2))

