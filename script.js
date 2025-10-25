const registerForm = document.getElementById("registerForm");
if(registerForm){
    registerForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const username = document.getElementById("regusername").value;
        const password = document.getElementById("regpassword").value;
        const role = document.getElementById("regrole").value;
        const registerMsg = document.getElementById("registerMsg");
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if(!username || !password || !role){
            registerMsg.textContent = " Please fill all fields";
            registerMsg.style.color = "red";
            return;
        }

        if(users.some(u => u.username === username)){
            registerMsg.textContent = "Username already exists";
            registerMsg.style.color = "red";
            return;
        }

        users.push({username, password, role});
        localStorage.setItem("users", JSON.stringify(users));
        registerMsg.textContent = " Registered successfully!";
        registerMsg.style.color = "green";
        registerForm.reset();
    });
}

// --- Login ---
const authForm = document.getElementById("authform");
if(authForm){
    authForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const username = document.getElementById("loginusername").value;
        const password = document.getElementById("loginpassword").value;
        const role = document.getElementById("role").value;
        const loginMsg = document.getElementById("loginMsg");
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if(!username || !password || !role){
            loginMsg.textContent = "Please fill all fields";
            loginMsg.style.color = "red";
            return;
        }

        const user = users.find(u => u.username === username && u.password === password && u.role === role);

        if(user){
            localStorage.setItem("kickStart_enduser", JSON.stringify(user));
            if(role === "student"){
                window.location.href = "student.html";
            } else if(role==="instructor") {
                window.location.href = "instructor.html";
            }
            else{
                window.location.href="admin.html";
            }
        } else {
            loginMsg.textContent = "Invalid username or password!";
            loginMsg.style.color = "red";
        }
    });
}

// --- Logout ---
const logoutBtn = document.getElementById("logoutBtn");
if(logoutBtn){
    logoutBtn.addEventListener("click", ()=>{
        localStorage.removeItem("kickStart_enduser");
        window.location.href = "login.html";
    });
}


let cart = [];

// Add course to cart
function addToCart(price, courseName) {
  cart.push({ courseName, price });
  displayCart();
}

// Show cart items
function displayCart() {
  const cartList = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.textContent = `${item.courseName} - ₹${item.price}`;
    
    // ❌ Remove option
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = () => removeFromCart(index);
    
    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });

  cartTotal.textContent = total;
}

// Remove course from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  displayCart();
}


function checkoutCart() {
    const checkoutMsg = document.getElementById("checkoutMsg");

    if (cart.length === 0) {
        checkoutMsg.textContent = "Your cart is empty!";
        checkoutMsg.style.color = "red";
        return;
    }

    // Save cart to localStorage for payment page
    localStorage.setItem("kickStart_cart", JSON.stringify(cart));
    // Redirect to payment page
    window.location.href = "payment.html";
}