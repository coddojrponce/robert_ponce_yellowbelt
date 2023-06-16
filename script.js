const myTimeout = setTimeout(myGreeting, 8000);

function myGreeting(){
    alert("You can get 50% off by using the code BANANAS")
}

function searchFunc(){
    let input = document.getElementById("search-input").value
    console.log("search Function is working")
    console.log(input)
    alert(`User searched ${input}`)
}

function countUp(element){
    console.log("count up working")
    console.log(element.innerText)
    element.innerText = parseInt(element.innerText) + 1
}

function addToCart(){
    console.log("adding to cart")
    let element = document.getElementById("cart-count")
    element.innerText = parseInt(element.innerText) +1
}