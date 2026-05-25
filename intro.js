const intro = document.querySelector(".intro-screen");
const mainContent = document.querySelector(".main-content");

setTimeout(() => {
    intro.classList.add("hide");
    mainContent.classList.add("show");
}, 2000);
