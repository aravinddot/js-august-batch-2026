

// sync by nature
// single threaded 
// one task at a time

// sync example

// console.log('task 1')

// console.log('task 2')

// console.log('task 3')


// async example

// console.log('task 1')

// setTimeout(()=> {
//     console.log('Task 2')
// }, 5000)

// console.log('task 3')



// async function apiCall() {
//     const response = await fetch('https://automationexercise.com/api/productsList')
//     console.log(await response.json())
// }

// apiCall()


// function getApiValues() {
//     const res = fetch('https://automationexercise.com/api/productsList').then((res)=> {
//         return res.json()
//     })

//     res.then((data)=> {
//         console.log(data)
//     })
// }

// getApiValues()