const nav = document.getElementById("navbar");
const toggle = document.getElementById("navToggle");

toggle.addEventListener("click", () => {
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});
