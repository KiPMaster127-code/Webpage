const menuButton = document.getElementById("navToggle");
const sideMenu   = document.getElementById("sideMenu");
const overlay    = document.getElementById("overlay");

menuButton.addEventListener("click", () => {
  sideMenu.classList.add("open");
  overlay.classList.add("show");
  menuButton.classList.add("hidden");
});

function closeMenu() {
  sideMenu.classList.remove("open");
  overlay.classList.remove("show");
  menuButton.classList.remove("hidden");
}

overlay.addEventListener("click", closeMenu);
