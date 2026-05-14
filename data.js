const products = [

    {
        id: 1,
        title: "Premium Hoodie",
        category: "Fashion",
        price: 2499,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800"
    },

    {
        id: 2,
        title: "Neo Sneakers",
        category: "Shoes",
        price: 3999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800"
    },

    {
        id: 3,
        title: "Smart Watch",
        category: "Electronics",
        price: 5999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800"
    },

    {
        id: 4,
        title: "Wireless Headphone",
        category: "Audio",
        price: 2999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800"
    }

];

let users = JSON.parse(localStorage.getItem("users")) || [];