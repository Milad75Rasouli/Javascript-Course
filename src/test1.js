// Array Methods

const products = [
    {
        ID:1,
        title: "Book 9",
        price: 80,
        exists: true
    },
    {
        ID:2,
        title: "Book 5",
        price: 30,
        exists: false
    },
    {
        ID:3,
        title: "Book 2",
        price: 80,
        exists: true
    }
]


const f=()=> console.log
("a message from arrow function")
f()
f1 = ()=>console.log
("a message from unname arrow function")
f1()

// forEach
console.log("Foreach method!")
products.forEach((item)=>{
    const {title} = item
    console.log(title)
})

// map 
console.log("map method!")
const productPrices = products.map((item)=>{
    const {price} = item
    return price; // the main diffrence between 
    // map and foreach is in map we can return something.
    // one more thing, in map the result is an array, but
    // in foreach the result is a string.
})
console.log(productPrices)

// filter
console.log("filter method!")
const productExist = products.filter((item)=>{

    return item.exists === true
})
console.log(productExist)



