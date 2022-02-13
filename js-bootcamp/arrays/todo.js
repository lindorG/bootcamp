const todos = [{
    text: "eating food",
    completed: false
}, {
    text: "working from home",
    completed: true
}, {
    text: "shower",
    completed: true
}, {
    text: "chilling at home",
    completed: false
}, {
    text: "sleeping in bed",
    completed: true
}]

const deleteToDo = function (todos, todoText) {
    const indexValue = todos.findIndex(function (indexValue) {
    return indexValue.text.toLowerCase() === todoText.toLowerCase()
    })

    if (indexValue > -1) {
    todos.splice(indexValue, 1)
    }
}

/*const result = todos.filter(status => status.completed === false)
console.log(result)*/
// or
const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (b.completed === false && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}


sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))


// const del = deleteToDo(todos, "CHILLING AT HOME")
// console.log(todos)



// 1. Convert array to array objcts -> text, completed






















/*toDo.splice(2, 1)
toDo.push("pain")
toDo.shift()

console.log(`You have ${toDo.length} to-do's:`)
toDo.forEach(function (toDo, index) {
    const num = index + 1
    console.log(`${index+1}. ${toDo}`)
})

// console.log(`To-do list: ${toDo[0]} in the morning, followed by ${toDo[toDo.length - 1]} at night.`)

for (let list = 0; list < toDo.length; list++) {
    console.log(`${list+1}. ${toDo[list]}`)
}*/