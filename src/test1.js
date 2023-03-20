// Class / constructor function

// what's OOP?
// we always declear some featurs for
// an object and whenever we need it, 
// we make an object from it.
// it helps us to reuse a block of code
// and optimise our program.

// Note: we alway declar constructor
// function in Pascal form.
function Product1(title, price){
    // when we use "this" this means
    // it's a property for Product.
    this.title = title
    this.price = price
    
    //it's not a function it's a method
    this.productInfo1= function(){
        return `Title:${this.title}\
        Price:${this.price}`
    }

    // it's witten by arow function
    this.productInfo2= ()=>
        `Title:${this.title}\
        Price:${this.price}`
}

let good1 = new Product1("Book 1", 444)
result = good1.productInfo2()
console.log(good1)
console.log(result)

// classs 2
// it's been recomended to use this
// format to have a class in javascript
console.log("Class 2")
class Product2{
    constructor(title, price){
        this.title = title
        this.price = price
    }
    productInfo(){
        return `Title:${this.title}\
        Price:${this.price}`
    }
}
const good2 = new Product2("Plate 1", 22)
const conclution = good2.productInfo()
console.log(good2)
console.log(conclution)