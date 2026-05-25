const cards = document.querySelectorAll(".product-card");
const modal = document.getElementById("productModal");
const closeBtn = document.getElementById("closeModal");

const modalName = document.getElementById("modalName");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const modalImg = document.getElementById("modalImg");

const prevBtn = document.getElementById("prevImg");
const nextBtn = document.getElementById("nextImg");

let images = [];
let currentIndex = 0;

cards.forEach(card => {
    card.addEventListener("click", () => {

        modalName.textContent = card.dataset.name;
        modalDesc.textContent = card.dataset.desc;
        modalPrice.textContent = card.dataset.price;

        images = card.dataset.images.split(",").map(img => img.trim());
        currentIndex = 0;

        fadeImageChange(images[currentIndex]);

        if (images.length <= 1) {
            prevBtn.style.display = "none";
            nextBtn.style.display = "none";
        } else {
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
        }

        modal.classList.add("open");
    });
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    fadeImageChange(images[currentIndex]);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    fadeImageChange(images[currentIndex]);
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
});

function fadeImageChange(newSrc) {
    modalImg.classList.add("fade-out");

    setTimeout(() => {
        modalImg.src = newSrc;
        modalImg.classList.remove("fade-out");
        modalImg.classList.add("fade-in");

        setTimeout(() => {
            modalImg.classList.remove("fade-in");
        }, 200);
    }, 200);
}
