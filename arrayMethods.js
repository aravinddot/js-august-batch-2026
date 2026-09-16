



const automationTools = ["playwright", "selenium", "cypress", "testcafe", "webdriverio", "nightwatch", "puppeteer"]

const legacyTools = ["QTP", "RFT", "Tosca", "UFT"]

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



const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, [10]]]]]]


// const arr1 = [1, 2, [3, 4], [5, 6], [7, 8]]


console.log(arr.flat(Infinity))

