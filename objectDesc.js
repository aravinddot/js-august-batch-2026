

const automation = {
    fname: "playwright",
    lname: "automation",
    age: 6,
    country: "USA",
    company: "Microsoft",
}


const { fname, lname, age, country, company = "amazon" } = automation

console.log(fname)
console.log(lname)
console.log(age)
console.log(country)
console.log(company)