



// const automationTools = ["playwright", "selenium", "cypress", "testcafe", "webdriverio", "nightwatch", "puppeteer"]

// const legacyTools = ["QTP", "RFT", "Tosca", "UFT"]

//automationTools.push("QTP", "Appium") // add new element at the end of the array

//automationTools.unshift("QTP", "Appium") // add new element at the beginning of the array

//automationTools.pop() // remove the last element of the array

//automationTools.shift() // remove the first element of the array

// console.log(automationTools)

// console.log(automationTools.includes("Playwright")) // check if the element is present in the array or not


// console.log(automationTools.indexOf("cypress")) // check the index of the element in the array


// const result = automationTools.concat(legacyTools, "new value") // merge two arrays

// console.log(result)

// console.log(automationTools.reverse()) // reverse the array



// const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, [10]]]]]]


// // const arr1 = [1, 2, [3, 4], [5, 6], [7, 8]]


// console.log(arr.flat(Infinity))



//const automationTools = ["playwright", "selenium", "cypress", "testcafe", "webdriverio", "nightwatch", "puppeteer"]

// automationTools.forEach((value, index, array)=> {

//     console.log(value)
//     console.log(index)
//     console.log(array)
// })

// console.log(automationTools.slice(1, 7))


// automationTools.splice(7, 1, "a", 'b', 'c', 'd') // remove the elements from the array and add new elements in the array

// console.log(automationTools)



// const num = [10, 20, 30, 40, 50]

// const result = num.map(value => value * 10)

// console.log(result)


// const res = automationTools.map(value => value.toUpperCase())

// console.log(res)


// const num = [10, 20, 30, 40, 50]


// const result = num.filter(value => value > 20)

// console.log(result)


// const result = num.find(value => value > 20)

// console.log(result)


// const result = num.findIndex(value => value > 20)

// console.log(result)



const num = [100, 10, 20, 30, 40, 50]

// const res = num.every(val => val > 10)

// console.log(res)


// const res = num.some(val => val > 30)

// console.log(res)


// const result =num.sort((a, b) => a - b)

// console.log(result)

// const str = "playwright"

// console.log(Array.isArray(num))


const automationTools = ["playwright", "selenium", "cypress", "testcafe", "webdriverio", "nightwatch", "puppeteer"]


for(const tool of automationTools.keys()) {

    console.log(tool)
}

for(const tool of automationTools.values()) {

    console.log(tool)
}

for(const tool of automationTools.entries()) {

    console.log(tool)
}


