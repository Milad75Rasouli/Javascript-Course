//arrays

const product = ['Book', 99, true, 'description:']

// destructuring in javascript
const [title,price, ...others] = product
 

console.log(title, price);
console.log(others)

