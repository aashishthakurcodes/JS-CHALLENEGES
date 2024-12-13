// Product Data (Simulated Database)
const products = [
    { id: 1, name: "Product A", price: 19.99, description: "A great product", image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Product B", price: 29.99, description: "Another great product", image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Product C", price: 39.99, description: "Yet another product", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" }
];

// Cart Array
let cart = [];

// Render Product Listing
function renderProducts() {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    renderCart();
}

// Render Shopping Cart
function renderCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceElement.textContent = '0.00';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</span>
            <div>
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Update Quantity
function updateQuantity(productId, change) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) {
            removeFromCart(productId);
        }
    }
    renderCart();
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
}

// Checkout Form Handling
const checkoutForm = document.getElementById('checkout-form');
checkoutForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(checkoutForm);
    const name = formData.get('name');
    const address = formData.get('address');
    const card = formData.get('card');

    alert(`Thank you for your purchase, ${name}! Your order will be shipped to ${address}.`);

    cart = []; // Clear the cart
    renderCart();
    document.getElementById('checkout').style.display = 'none';
});

// Initialize Page
renderProducts();
renderCart();
