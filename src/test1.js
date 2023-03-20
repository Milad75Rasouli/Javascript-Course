// The Document Object Model (DOM)
// html file => document
// html tags => elements

const titleInput = document.getElementById("title")
const priceInput = document.getElementById("price")
// document.getElementsByClassName("Myclass") // it gives us like an array
const inputs = document.getElementsByTagName("input")

lengthOfElements = inputs.length
for(let loop=0;loop<lengthOfElements;loop++){
    let element = inputs[loop]
    element.setAttribute("Placeholder",`text ${loop}`)
    console.log(element)
}

console.log(titleInput)
console.log(priceInput)

