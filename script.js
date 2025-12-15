const products = [
  { name: "MacBook Pro", price: 1299, img: "https://picsum.photos/300?1" },
  { name: "Wireless Headphones", price: 199, img: "https://picsum.photos/300?2" },
  { name: "Smart Watch", price: 299, img: "https://picsum.photos/300?3" },
  { name: "Sneakers", price: 149, img: "https://picsum.photos/300?4" },
  { name: "Camera", price: 899, img: "https://picsum.photos/300?5" }
];

let cart = 0;
const list = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");
const search = document.getElementById("search");

function render(items) {
  list.innerHTML = "";
  items.forEach(p => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button>Add to Cart</button>
    `;
    card.querySelector("button").onclick = () => {
      cart++;
      cartCount.textContent = cart;
      cartCount.style.transform = "scale(1.3)";
      setTimeout(() => cartCount.style.transform = "scale(1)", 200);
    };
    list.appendChild(card);
  });
}

search.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  render(products.filter(p => p.name.toLowerCase().includes(value)));
});

render(products);
