const cards = document.querySelectorAll(".product-card");
const modal = document.getElementById("productModal");
const closeBtn = document.getElementById("closeModal");

const modalName = document.getElementById("modalName");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");

cards.forEach(card => {
    card.addEventListener("click", () => {
        modalName.textContent = card.dataset.name;
        modalDesc.textContent = card.dataset.desc;
        modalPrice.textContent = card.dataset.price;

        modal.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});