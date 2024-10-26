let cart = [];

function addToCart(product) {
    cart.push(product);
    console.log(cart);
}

function displayCart() {
    let cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        let div = document.createElement('div');
        div.textContent = item.name + ' - ' + item.price;
        cartContainer.appendChild(div);
    });
}