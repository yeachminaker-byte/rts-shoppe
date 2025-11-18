const API_URL = "/api/products";

const statusEl = document.getElementById("status");
const gridEl = document.getElementById("productGrid");
const loadBtn = document.getElementById("loadBtn");

function createCard(product) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h4>${product.name}</h4>
    <p>${product.description}</p>
    <p class="price">৳ ${product.price}</p>
  `;
  return div;
}

async function fetchProducts() {
  statusEl.textContent = "পণ্য লোড হচ্ছে...";
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("API তে সমস্যা");
    const data = await res.json();
    gridEl.innerHTML = "";
    data.products.forEach(p => gridEl.appendChild(createCard(p)));
    statusEl.textContent = `মোট ${data.products.length}টি পণ্য পাওয়া গেছে।`;
  } catch (err) {
    statusEl.textContent = "পণ্য লোড করা যায়নি। পরে আবার চেষ্টা করুন।";
    console.error(err);
  }
}

loadBtn.addEventListener("click", fetchProducts);

// Optional: auto-load on first visit
document.addEventListener("DOMContentLoaded", () => {
  // fetchProducts();
});