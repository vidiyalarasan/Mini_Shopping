// ✅ Product data
const products = [
  { id: 1, title: "Wireless Headphones", description: "High-quality sound and long battery life.", price: 1999, image: "https://images.unsplash.com/photo-1518444027021-f4d45cde3d04?auto=format&fit=crop&w=600&q=80" },
  { id: 2, title: "Smart Watch", description: "Track fitness, heart rate, and notifications.", price: 2999, image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=600&q=80" },
  { id: 3, title: "Bluetooth Speaker", description: "Portable design, deep bass, and clear sound.", price: 1499, image: "https://images.unsplash.com/photo-1585386959984-a41552231693?auto=format&fit=crop&w=600&q=80" },
  { id: 4, title: "Gaming Mouse", description: "Ergonomic design with RGB lighting.", price: 899, image: "https://images.unsplash.com/photo-1587202372775-98927af16b5b?auto=format&fit=crop&w=600&q=80" },
  { id: 5, title: "Mechanical Keyboard", description: "Tactile keys with RGB lighting.", price: 2499, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80" },
  { id: 6, title: "Laptop Stand", description: "Ergonomic aluminum stand for laptops.", price: 999, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80" },
  { id: 7, title: "USB Type-C Hub", description: "Multiple ports for your devices.", price: 1299, image: "https://images.unsplash.com/photo-1598331668826-20cecc596b89?auto=format&fit=crop&w=600&q=80" },
  { id: 8, title: "Wireless Charger", description: "Fast charging pad for phones.", price: 899, image: "https://images.unsplash.com/photo-1588776814546-90562a7e3b90?auto=format&fit=crop&w=600&q=80" }
];

// ✅ DOM references
const productList = document.getElementById("product-list");
const searchBox = document.getElementById("searchBox");
const cartCount = document.getElementById("cartCount");
let cart = 0;

// ✅ Display all products
function displayProducts(filtered = products) {
  productList.innerHTML = "";
  filtered.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <div class="product-info">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="price">₹${p.price}</div>
        <button class="add-btn" onclick="addToCart()">Add to Cart</button>
      </div>
    `;
    productList.appendChild(card);
  });
}

// ✅ Add to cart
function addToCart() {
  cart++;
  cartCount.textContent = cart;
}

// ✅ Search functionality
searchBox.addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(query)
  );
  displayProducts(filtered);
});

// ✅ Initialize
displayProducts();
