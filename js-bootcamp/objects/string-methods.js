let name = "Elon Musk"

//Length property
console.log(name.length)

// Convert to uppercase
console.log(name.includes())

// Convert to lowercase
console.log(name.toLowerCase())

// Includes method
let password = "abc123password098"
console.log(password.includes("password"))

// Trim
console.log(name.trim())

// isValidPassword
// length is more than 8 - and it doesn't contain the word password


let isValidPassword = function (password) {
    console.log(password.length > 8 && !password.includes("password"))
}

isValidPassword("asdfp")
isValidPassword("abc123!@#$%^&")
isValidPassword("asdfpasdasdpaosdpassword")

