
// const automation = {
//     name: "playwright",
//     age: 6,
//     country: "USA",
// }


// // automation.company = "Microsoft" // add new property in the object

// // automation.name = "playwright, Selenium" // update the property in the object

// // delete automation.age // delete the property in the object

// // console.log(automation)

// for(const key in automation) {
//     console.log(automation[key])
// }


// for(const value of Object.keys(automation)) {
//     console.log(value)
// }

// for(const value of Object.values(automation)) {
//     console.log(value)
// }


// for(const value of Object.entries(automation)) {
//     console.log(value)
// }



const automation = {
    name: "playwright",
    age: 6,
    country: "USA",
}

const tool = {
    company: "Microsoft",
}

//Object.freeze(automation) // freeze the object, we can't add, update or delete the property in the object

// Object.seal(automation) // seal the object, we can't add or delete the property in the object but we can update the property in the object

// automation.company = "Microsoft" // add new property in the object

// automation.name = "playwright, Selenium" // update the property in the object

// delete automation.age // delete the property in the object

// console.log(automation)

const result = Object.assign(automation, tool) // merge two objects
console.log(result)