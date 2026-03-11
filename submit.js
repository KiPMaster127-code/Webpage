document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault(); 

    const fields = [
        { id: "name", message: "Please enter your name" },
        { id: "email", message: "Please enter your email" },
        { id: "event", message: "Please enter the event date" },
        { id: "message", message: "Please enter your message" }
    ];

    let valid = true;


    fields.forEach(f => {
        document.getElementById(f.id).classList.remove("input-error");
    });

    fields.forEach(f => {
        const el = document.getElementById(f.id);

    if (el.value.trim() === "") {
            valid = false;
            el.classList.add("input-error");

            
            const popup = document.createElement("div");
            popup.className = "error-popup";
            popup.textContent = f.message;

            const rect = el.getBoundingClientRect();
            popup.style.left = rect.left + "px";
            popup.style.top = (rect.top - 35) + "px";

            document.body.appendChild(popup);

            setTimeout(() => popup.remove(), 2000);
        }
    });

    if (!valid) return; 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const phonenumber = document.getElementById("phonenumber").value.trim();
    const event = document.getElementById("event").value.trim();
    const data = { name, email, message, phonenumber, event };

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