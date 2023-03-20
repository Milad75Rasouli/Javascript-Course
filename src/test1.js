// The Document Object Model (DOM)
// html file => document
// html tags => elements

const form = document.querySelector("#form")
const titleInput = document.querySelector("#title")
const priceInput = document.querySelector("#price")
const listViewer = document.querySelector("#productsViewer")

const addProduct=(event)=>{
    // it prevents from browser refreshing
    event.preventDefault()
    // a simple validation
    if(priceInput.value.length === 0 ||
        titleInput.value.length === 0 )
        return
    const productItem = document.createElement("li")
    const productInfo = document.createTextNode(`${titleInput.value} - ${priceInput.value}`) 
    productItem.appendChild(productInfo)
    listViewer.appendChild(productItem)
    titleInput.value = ""
    priceInput.value = ""


}
form.addEventListener("submit",addProduct)

