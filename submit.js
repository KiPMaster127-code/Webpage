document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phonenumber").value.trim();
    let eventInfo = document.getElementById("event").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("errorMessage");

    error.textContent = "";


    if (name === "" || email === "" || eventInfo === "" || message === "") {
        error.textContent = "Please fill out all required fields.";
        return;
    }

    const data = {
        name: name,
        email: email,
        phone: phone,
        event: eventInfo,
        message: message
    };

    try {
        const response = await fetch("https://formspree.io/f/mjgabqae", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("Your message has been sent, we will get back to you soon");
            this.reset();
        } else {
            alert("There was an error sending your message. Please try again");
        }

    } catch (err) {
        alert("Network error. Please check your connection and try again.");
    }
});