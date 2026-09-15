
// Traditional Loops

// i) while loop
// ii) do...while loop
// iii) for loop

// Modern Loops

// i) for...in loop
// ii) for...of loop



const automationTools = ["playwright", "selenium", "cypress", "testcafe", "webdriverio", "nightwatch", "puppeteer"]

// console.log(automationTools[0])

for(const index in automationTools) {
    // console.log(index)
    // console.log(automationTools[index])
    if(index == 3) {
        console.log(automationTools[index])
            // break;
    }
}




for(const tool of automationTools) {

    console.log(tool)

}
