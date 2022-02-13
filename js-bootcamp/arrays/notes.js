const notes = [{
    title: "My next trip",
    body: "I would like to go to Spain"
}, {
    title: "Habbits to work on",
    body: "Excercise. Eating a bit better."
}, {
    title: "Office modification",
    body: "Get a new set"
}]

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}



const findNote = function (notes, noteTitle) {
    return notes.find(function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// Search engine
const findNotes = function (notes, query) {
    return notes.filter(function (note) {
        const isTitleMatch = note.title.toLocaleLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLocaleLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

// console.log(findNotes(notes, "eating"))

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const note = findNote(notes, "Office modification")
//console.log(note)

sortNotes(notes)
console.log(notes)



























// console.log(notes.length)
// console.log(notes)

// // indexOf (===) vs findIndex (allows us to specify)
// // console.log(notes.indexOf())

// const index = notes.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === "Habbits to work on"
// })

// console.log(index)


/*// removes/adds new value to the end
console.log(notes.pop())
notes.push("Note 4")

// removes/adds new value to the beginning
console.log(notes.shift())
notes.unshift("Notes 5")

console.log(notes[notes.length-1])
console.log(notes[3])

// removes/adds new value to the middle
notes.splice(1, 1, "New second item")

//Counting... 1 (for)

for (let count = 0; count <= 2; count++) {
    console.log(count)
}

for (let count = notes.length-1; count >= 0; count--) {
    console.log(notes[count])
}

notes [2] = "This is now the new note 3"

notes.forEach(function (item, index) {
    console.log(item)
    console.log(index)
})*/
