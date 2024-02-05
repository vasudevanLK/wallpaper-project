const products = [
    { category: 'ALL', img: 'all-product.jpg', price: '$50', material: 'Cotton', size: 'Queen' },
    { category: 'mosquito-net', img: 'mosquito-net.jpg', price: '$30', material: 'Polyester', size: 'Single' },
    { category: 'wallpapers', img: 'wallpapers.jpg', price: '$20', material: 'Paper', size: 'Standard' },
    { category: 'screens', img: 'screens.jpg', price: '$40', material: 'Metal', size: 'Large' },
];

function filterProducts(category) {
    const filteredProducts = category === 'ALL' ? products : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="images/${product.img}" alt="${product.category}">
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Material:</strong> ${product.material}</p>
            <p><strong>Size:</strong> ${product.size}</p>
            <button class="order-button" onclick="placeOrder('${product.category}')">Place Order</button>
        `;

        productContainer.appendChild(productElement);
    });
}

function placeOrder(category) {
    alert(`Order placed for ${category}`);
}

// Initial display
filterProducts('ALL');
