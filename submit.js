document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phonenumber").value.trim();
    const eventInfo = document.getElementById("event").value.trim();
    const message = document.getElementById("message").value.trim();
    const error = document.getElementById("errorMessage");
    const submitBtn = this.querySelector('button[type="submit"]');

    error.textContent = "";
    error.classList.remove("shake");

    if (!name || !email || !eventInfo || !message) {
        error.textContent = "Please fill out all required fields.";
        error.classList.add("shake");
        return;
    }

    submitBtn.disabled = true;
    submitBtn.classList.add("loading");
    submitBtn.textContent = "Sending...";

    const data = { name, email, phone, event: eventInfo, message };

    try {
        const response = await fetch("https://formspree.io/f/mjgabqae", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            showSuccessMessage();
            this.reset();
        } else {
            showErrorMessage("There was an error sending your message. Please try again.");
        }

    } catch (err) {
        showErrorMessage("Network error. Please check your connection and try again.");
    }

    submitBtn.disabled = false;
    submitBtn.classList.remove("loading");
    submitBtn.textContent = "Submit";
});

function showSuccessMessage() {
    const msg = document.createElement("div");
    msg.className = "form-success";
    msg.textContent = "Your message has been sent! We will get back to you soon.";
    document.body.appendChild(msg);

    setTimeout(() => msg.classList.add("show"), 10);
    setTimeout(() => msg.classList.remove("show"), 3500);
    setTimeout(() => msg.remove(), 4000);
}

function showErrorMessage(text) {
    const error = document.getElementById("errorMessage");
    error.textContent = text;
    error.classList.add("shake");
}