
//let firstName = "Donald"
let firstName = null
let lastName = "Bazile"

if(firstName){
    console.log(`Hello world, ${firstName}`)
} else if (lastName){
    console.log("My last name is " + lastName)
} else {
    console.log("Hello world, stranger")
}

let fulName = firstName && lastName ? `My full name is ${firstName} $ {lastName}` : "You are nameless"
console.log(fulName)

const today = "Tuesday"

let result = today === "Monday"? "Darie is getting paid": "Darie is broke"
console.log(result)

// Switch

const fruit = ""

switch(fruit){
    case "orange":
        console.log("This is an orange")
        break
        case "apple":
            console.log("This is my apple")
            break
            default:
                console.log("We are out of fruit")
                break
}

function sum(a, b){
    const result = a + b
    return result
}

let addition = sum(2, 7)
console.log("The sum is", addition)

