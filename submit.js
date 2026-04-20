document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let eventInfo = document.getElementById("event").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("errorMessage");

    error.textContent = "";

    if (name === "" || email === "" || eventInfo === "" || message === "") {
        error.textContent = "Please fill out all required fields.";
        return;
    }


    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
});