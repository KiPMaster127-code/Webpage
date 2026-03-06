document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const data = { name, email, message };

    const response = await fetch("https://formspree.io/f/mjgabqae" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert("Your message has been sent, we will get back to you soon");
        this.reset();
    } else {
        alert("There was an error sending your message. Please try again");
    }
});