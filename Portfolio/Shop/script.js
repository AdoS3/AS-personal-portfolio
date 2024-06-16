const container = document.querySelector(".container")
const cartContainer = document.querySelector(".cart-container")
const cartIcon = document.querySelector(".fa-cart-shopping")
const scrollCart = document.querySelector("#scrollCart")
const url = 'https://fakestoreapi.com/products?limit=10'
let itemsNumber = document.querySelector(".items-number")
let price = 0


async function getData(){
    try {
        const response = await fetch(url);
        const itemsData = await response.json();
        displayItems(itemsData)
        let addButtons = document.querySelectorAll(".add-btn")
        addButtons.forEach((addBtn) => {
            addBtn.addEventListener("click", addToCart)
        })

    } catch (error) {
        console.error(error);
    }
}




function displayItems(data){
    data.forEach(item => {
        let itemContainer = document.createElement("div")
        itemContainer.classList.add("item-container")
        itemContainer.innerHTML = `
        <img src="${item.image}" class="item-img">
        <div class="item-name">${item.title}</div>
        <div class="item-price">${item.price}€</div>
        <button class="add-btn">Add to cart</button>
        `
        container.appendChild(itemContainer)
    })
}

getData()

function addToCart(event){
            let clickedItem = event.target.parentElement
            
            let itemImg = clickedItem.querySelector(".item-img")
            let itemName = clickedItem.querySelector(".item-name").innerHTML
            let itemPrice = clickedItem.querySelector(".item-price")      
            
            let cartItems = document.querySelectorAll(".cart-item-name")
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].innerHTML === itemName) {
                    alert("Already in cart");
                    return
                }
            }

            itemsNumber.innerHTML = parseInt(itemsNumber.innerHTML) + 1

            let cartImg = document.createElement("img")
            cartImg.setAttribute("src", itemImg.src)
            cartImg.classList.add("cart-item-img")

            let cartName = document.createElement("div")
            cartName.classList.add("cart-item-name")
            cartName.innerHTML = itemName

            let cartPrice = document.createElement("div")
            cartPrice.classList.add("cart-item-price")
            cartPrice.innerHTML = itemPrice.innerHTML

            let cartItemQuantity = document.createElement("div")
            cartItemQuantity.classList.add("cart-item-quantity")
            cartItemQuantity.innerHTML = `
            <span><i class="fa-solid fa-angle-left"></i></span>
            <span class="item-quantity">1</span>
            <span><i class="fa-solid fa-angle-right"></i></span>
            `


            let removeBtn = document.createElement("button")
            removeBtn.classList.add("remove-cart-item")
            removeBtn.innerHTML = `<i class="fa-regular fa-trash-can"></i>`



            let cartItem = document.createElement("div")
            cartItem.classList.add("cart-item")
            cartItem.appendChild(cartImg)
            cartItem.appendChild(cartName)
            cartItem.appendChild(cartPrice)
            cartItem.appendChild(cartItemQuantity)
            cartItem.appendChild(removeBtn)
            
            cartContainer.appendChild(cartItem)

            let minusQuant = cartItem.querySelector(".fa-angle-left")
            let plusQuant = cartItem.querySelector(".fa-angle-right")
            let quantityElement = cartItem.querySelector(".item-quantity")

            minusQuant.addEventListener("click", () => {
                decreaseQuantity(quantityElement)
                updateCartTotal();
                saveCart();
            });

            plusQuant.addEventListener("click", () => {
                increaseQuantity(quantityElement)
                updateCartTotal();
                saveCart();
            });
            
            removeBtn.addEventListener("click", removeCartItem)

            updateCartTotal()
            saveCart()
}

function removeCartItem(event){
        let btnClicked = event.target
        btnClicked.closest(".cart-item").remove()
        itemsNumber.innerHTML = parseInt(itemsNumber.innerHTML) - 1
        updateCartTotal()
        saveCart()
}

function saveCart(){
    localStorage.setItem("cart", cartContainer.innerHTML)
}

function getSavedCart() {
    cartContainer.innerHTML = localStorage.getItem("cart")
    let removeButtons = document.querySelectorAll(".remove-cart-item")
    removeButtons.forEach(btn => {
        btn.addEventListener("click", removeCartItem)
    });

    let plusQuants = document.querySelectorAll(".fa-angle-right")
    let minusQuants = document.querySelectorAll(".fa-angle-left")
    let quantityElements = document.querySelectorAll(".item-quantity")

    plusQuants.forEach((plusQuant, index) => {
        plusQuant.addEventListener("click", () => {
            increaseQuantity(quantityElements[index])
            updateCartTotal()
            saveCart()
        });
    });

    minusQuants.forEach((minusQuant, index) => {
        minusQuant.addEventListener("click", () => {
            decreaseQuantity(quantityElements[index])
            updateCartTotal()
            saveCart()
        })
    })

    let cartItem = document.querySelectorAll(".cart-item")
    itemsNumber.innerHTML = cartItem.length

    updateCartTotal()
}

getSavedCart()

function decreaseQuantity(quantityElement) {
    let quantity = parseInt(quantityElement.textContent)
    if (quantity > 1) {
        quantityElement.textContent = quantity - 1
    }
}

function increaseQuantity(quantityElement) {
    let quantity = parseInt(quantityElement.textContent)
    quantityElement.textContent = quantity + 1
}



function updateCartTotal(){
    let cartTotal = document.querySelector(".cart-total")
    let cartItems = document.querySelectorAll(".cart-item")
    price = 0
    for(i = 0 ; i < cartItems.length ; i++){
        let priceElement = cartItems[i].querySelector(".cart-item-price")
        let cartQuantityElement = cartItems[i].querySelector(".item-quantity")
        let priceItem = parseFloat(priceElement.innerHTML) * parseInt(cartQuantityElement.innerHTML)
        price = price + priceItem
    }
    cartTotal.innerHTML = `${price.toFixed(2)}€`
}


cartIcon.addEventListener("click", ()=> {
    window.scrollTo({top: scrollCart.offsetTop,behavior: "smooth"})
})


