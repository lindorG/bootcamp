let myBook = {
    title: "Industrial Society and Its Future",
    aurthor: "Ted Kaczynski",
    pageCount: 162
}

let otherBook = {
    title: "Anti-Tech Revolution: Why and How",
    aurthor: "Ted Kaczynski",
    pageCount: 236
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.aurthor}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(otherBookSummary.pageCountSummary)

// Challenge Area
// Create function - take fahrenheit in - return object with all three

let convertFahrenheit = function (fahrenheit) {
    return {
        Celsius: `${fahrenheit}°F is equal to ${(fahrenheit - 32) * 5/9}°C.`,
        Kelvin: `${fahrenheit}°F is equal to ${(fahrenheit - 32) * 5/9 + 273.15}°K`
    }
}

let temps = convertFahrenheit(32)
console.log(temps)
// console.log(temps.Celsius)
// console.log(temps.Kelvin)
