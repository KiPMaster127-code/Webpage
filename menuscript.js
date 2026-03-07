const menuButton = document.getElementById("navToggle");
const sideMenu   = document.getElementById("sideMenu");
const overlay    = document.getElementById("overlay");

menuButton.addEventListener("click", () => {
  sideMenu.classList.add("open");
  overlay.classList.add("show");   
  menuButton.style.display = "none";
});

overlay.addEventListener("click", () => {
  sideMenu.classList.remove("open");
  overlay.classList.remove("show"); 
  menuButton.style.display = "block";
});