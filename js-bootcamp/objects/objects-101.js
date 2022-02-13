let myBook = {
    title: "Industrial Society and Its Future",
    aurthor: "Ted Kaczynski",
    pagecount: 162
}

console.log(`${myBook.title} by ${myBook.aurthor}`)

myBook.title = "Anti-Tech Revolution: Why and How"

console.log(`${myBook.title} by ${myBook.aurthor}`)

// Challenge area

let thisPerson = {
    name: "Elon Musk",
    age: 50,
    locaiton: "Texas"
}

console.log(`${thisPerson.name}, age ${thisPerson.age}, lives in ${thisPerson.locaiton}.`)

thisPerson.age = thisPerson.age + 1

console.log(`${thisPerson.name} will be  age ${thisPerson.age + 1} next year.`)


// Another temp converter

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)