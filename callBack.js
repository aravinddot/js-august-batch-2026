


// function add(value) {
//     return value + 10
// }


// // const result = add(100)

// // console.log(result)

// function print(callback) {
//     const result = callback(100)
//     console.log(result)
// }

// print(add)



function calculate(a, b, operation) {
    return operation(a, b)
}

function add(a, b) {
    return a + b
}

function subract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}


const result = calculate(10, 20, add)

console.log(result)

const result1 = calculate(10, 20, subract)

console.log(result1)

const result2 = calculate(10, 20, multiply)

console.log(result2)


// const addedValue = add(10, 20)

// console.log(addedValue)






