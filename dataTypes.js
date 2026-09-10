
// Primitive data types
// Non primitive data types Or Reference data types



// i) Primitive

// 1. String

const value = "Playwright is a popular automation tool"


// 2. Number

const num = 100


// 3. Boolean

const isPopular = true


// 4. Null

let data = null

data = false


// 5. Undefined

let newValue = undefined

// console.log(value)
// console.log(num)
// console.log(isPopular)
// console.log(data)
// console.log(newValue)



// ii) Non primitive data types


// 1. Array

                        // 0            1   2   3       4               5
const automationTools = ["playwright", 6, true, null, undefined, ["cypress", "selenium"], {name: "JavaScript"}]
                                                                    //0        1
console.log(automationTools[0], automationTools[5][1])

console.log(automationTools[0])




// 2. Object


const obj = {
    name: "Playwright",
    age: 6,
    isPopular: true,
    array: ["cypress", "selenium"],
    nestedObj: {
        name: "JavaScript",
    }
}

// dot notation

//console.log(obj.array[0]) // static

// bracket notation

//console.log(obj['nestedObj']['name']) // dynamic


// 3. Function

// reuse

function printValues() {
    console.log("Playwright is a popular automation tool")
}

printValues() // calling the function

printValues() 

printValues() 

printValues() 


 function enterNames() {
    // first name and last name
 }