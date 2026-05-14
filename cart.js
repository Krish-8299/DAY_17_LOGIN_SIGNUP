const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
);

if (!currentUser) {

    window.location.href = "login.html";

}

let cart = JSON.parse(
    localStorage.getItem("cart")
) || [];

const cartItems = document.getElementById("cartItems");

function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `

<div class="empty-cart">

<i class="ri-shopping-cart-2-line"></i>

<h2>Your Cart Is Empty</h2>

<p>
Add Products To Continue Shopping
</p>

<a href="index.html">
Go Shopping
</a>

</div>

`;

        document.getElementById("itemCount").innerText = 0;

        document.getElementById("grandTotal").innerText =
            "₹0";

        return;

    }

    cart.forEach((item, index) => {

        if (!item.quantity || item.quantity < 1) {

            item.quantity = 1;

        }

        const itemTotal = item.price * item.quantity;

        total += itemTotal;

        cartItems.innerHTML += `

<div class="cart-card">

<img src="${item.image}">

<div class="cart-content">

<h2>${item.title}</h2>

<p>${item.category}</p>

<h3>₹${item.price}</h3>

<!-- Quantity -->

<div class="quantity-box">

<button onclick="decreaseQty(${index})">

<i class="ri-subtract-line"></i>

</button>

<span>${item.quantity}</span>

<button onclick="increaseQty(${index})">

<i class="ri-add-line"></i>

</button>

</div>

<h4>
Total : ₹${itemTotal}
</h4>

<div class="cart-actions">

<button onclick="removeItem(${index})">

<i class="ri-delete-bin-6-line"></i>

Remove

</button>

</div>

</div>

</div>

`;

    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    document.getElementById("itemCount").innerText =
        cart.length;

    document.getElementById("grandTotal").innerText =
        `₹${total}`;

}

displayCart();

function increaseQty(index) {

    cart[index].quantity += 1;

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();

}

function decreaseQty(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity -= 1;

    } else {

        removeItem(index);

        return;

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();

}

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();

    showToast("Product Removed");

}

function checkout() {

    if (cart.length === 0) {

        showToast("Cart Is Empty");

        return;

    }

    document.getElementById("popup")
        .classList.add("show-popup");

    localStorage.removeItem("cart");

}

function closePopup() {

    window.location.href = "index.html";

}

function showToast(message) {

    const toast = document.createElement("div");

    toast.classList.add("toast");

    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show-toast");

    }, 100);

    setTimeout(() => {

        toast.remove();

    }, 3000);

}