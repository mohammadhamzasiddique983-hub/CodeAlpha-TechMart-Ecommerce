let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName) {
    cart.push(productName);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(productName + " added to cart!");
}