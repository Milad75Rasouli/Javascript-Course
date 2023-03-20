// Class / constructor function

// what's OOP?
// we always declear some featurs for
// an object and whenever we need it, 
// we make an object from it.
// it helps us to reuse a block of code
// and optimise our program.

// Note: we alway declar constructor
// function in Pascal form.
function Product(title, price){
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

let good = new Product("Book 1", 444)
result = good.productInfo2()
console.log(good)
console.log(result)
