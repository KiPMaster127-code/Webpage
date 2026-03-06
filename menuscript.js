const menuButton = document.getElementById("navToggle");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

menuButton.addEventListener("click", () => {
  sideMenu.classList.add("open");
  overlay.style.display = "block";
  menuButton.style.display = "none";
});

overlay.addEventListener("click", () => {
  sideMenu.classList.remove("open");
  overlay.style.display = "none";
  menuButton.style.display = "block";
});