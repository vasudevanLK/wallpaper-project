const products = [
    { category: 'Wallpaper Customized', img: "images (1).jpeg", price: '$50', material: 'Paper', size: 'Custom' },
    { category: 'mosquito-net', img: 'mosqnt.jpeg', price: '$30', material: 'Polyester', size: 'Single' },
    { category: 'mosquito-net', img: 'netmosq.jpeg', price: '$30', material: 'Polyester', size: 'Double' },
    { category: 'mosquito-net', img: 'netmosq.jpeg', price: '$30', material: 'Polyester', size: 'Medium' },
    { category: 'mosquito-net', img: 'queensize.avif', price: '$30', material: 'Polyester', size: 'Queen' },
    { category: 'Window Screen', img: 'screen.jpg', price: '$20', material: 'Paper', size: 'Standard' },
    { category: 'Blinds', img: 'screens.jpeg', price: '$40', material: 'Metal', size: 'Large' },
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
    <label for="quantity">Quantity:</label>
    <input type="number" id="quantity" name="quantity" min="1" value="1">

    <label for="deliveryTime">Delivery Time:</label>
    <select id="deliveryTime" name="deliveryTime">
        <option value="1 week">Within 1 week</option>
        <option value="2 weeks">Within 2 weeks</option>
        <option value="1 month">Within 1 month</option>
        <option value="1 year">Within 1 year</option>
    </select>

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
