let cart = JSON.parse(localStorage.getItem("kickStart_cart")) || [];

function displayCart() {
    const cartList = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartList.innerHTML = "";
    let total = 0;

    if(cart.length === 0){
        cartList.innerHTML = "<li>Your cart is empty</li>";
    } else {
        cart.forEach(item => {
            total += item.price;
            const li = document.createElement("li");
            li.textContent = `${item.courseName} - ₹${item.price}`;
            cartList.appendChild(li);
        });
    }

    cartTotal.textContent = total;
}

function pay(method) {
    if(cart.length === 0){
        document.getElementById("paymentMsg").textContent = "Your cart is empty!";
        document.getElementById("paymentMsg").style.color = "red";
        return;
    }

    // Simulate payment success
    document.getElementById("paymentMsg").textContent = `Payment successful via ${method}!`;
    document.getElementById("paymentMsg").style.color = "green";

    // Clear cart after payment
    localStorage.removeItem("kickStart_cart");
    cart = [];
    displayCart();
}

// Initialize
displayCart();