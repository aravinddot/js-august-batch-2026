
// rest parameter

const person = ['fname', 'lname', 'age', 'country', 'Pincode', 'address', 'state', 'city']

// const [valueOne, valueTwo, ...remainingValues] = person // destructuring the array

// console.log(valueOne) 
// console.log(valueTwo) 
// console.log(remainingValues) 

// const username = `${valueOne} ${valueTwo}`
// console.log(username)


function getValue(...values) {
   console.log(values)
//    console.log(a)
//    console.log(b)
//    console.log(c)
//    console.log(d)
//    console.log(e)
}

getValue(...person)


console.log(...person) // spread operator