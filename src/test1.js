// JSON => Javascript Object Notaition.
const products = [
    {
        ID: 1,
        title: 'Car 1',
        price: 20,
        exists: true
    },
    {
        ID: 2,
        title: 'Car 2',
        price: 90,
        exists: false
    }
]

// convert the variable to a JSON 
// string of products
const data = JSON.stringify(products)
console.log(data);

// convert a JSON string to an object
const response = JSON.parse(data)

console.log(response);


