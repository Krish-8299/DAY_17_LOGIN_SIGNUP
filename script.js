const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
);

if (!currentUser) {

    window.location.href = "login.html";

}

document.getElementById("userName").innerText =
    currentUser.name;

const productGrid = document.getElementById("productGrid");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {

    productGrid.innerHTML = "";

    products.forEach(product => {

        productGrid.innerHTML += `

<div class="product-card">

<img src="${product.image}">

<div class="product-content">

<h3>${product.title}</h3>

<p>${product.category}</p>

<h2>₹${product.price}</h2>

<button onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>

</div>

`;

    });

}

displayProducts();

function addToCart(id) {

    const existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        const product = products.find(item => item.id === id);

        cart.push({

            ...product,
            quantity: 1

        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    showToast("Product Added To Cart");

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