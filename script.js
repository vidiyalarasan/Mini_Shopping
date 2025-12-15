const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Laptop",
    price: 54999,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 3999,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 4999,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
  }
];

const list = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalEl = document.getElementById("total");

const cartSidebar = document.getElementById("cart-sidebar");
const cartOverlay = document.getElementById("cart-overlay");

let cart = [];

/* RENDER PRODUCTS */
function render(items) {
  list.innerHTML = "";
  items.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button>Add to Cart</button>
    `;
    div.querySelector("button").onclick = () => addToCart(p);
    list.appendChild(div);
  });
}

/* CART FUNCTIONS */
function addToCart(product) {
  cart.push(product);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name}</span>
      <div>
        <span>₹${item.price}</span>
        <button class="remove-btn">❌</button>
      </div>
    `;
    div.querySelector(".remove-btn").onclick = () => removeFromCart(index);
    cartItems.appendChild(div);
  });

  cartCount.textContent = cart.length;
  totalEl.textContent = total;
}

/* CART OPEN/CLOSE */
document.getElementById("open-cart").onclick = () => {
  cartSidebar.classList.add("active");
  cartOverlay.classList.add("active");
};

cartOverlay.onclick = () => {
  cartSidebar.classList.remove("active");
  cartOverlay.classList.remove("active");
};

/* CHECKOUT */
document.getElementById("checkout-btn").onclick = () => {
  if (cart.length === 0) return alert("Cart is empty");
  document.getElementById("checkout-modal").style.display = "flex";
};

document.getElementById("place-order").onclick = () => {
  document.getElementById("checkout-modal").style.display = "none";
  document.getElementById("success-modal").style.display = "flex";
};

/* SEARCH */
document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  render(products.filter(p => p.name.toLowerCase().includes(val)));
});

/* DARK MODE */
const toggle = document.getElementById("theme-toggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

render(products);
