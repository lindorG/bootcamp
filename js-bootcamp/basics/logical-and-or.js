let temp = 150

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
}


//

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan === true && isGuestTwoVegan === true) {
    console.log('Only offer up vegan food')
} else if (isGuestOneVegan === true || isGuestTwoVegan === true) {
    console.log('Make sure to offer up some vegan options.')
} else {
    console.log('Offer up anything on the menu')
}