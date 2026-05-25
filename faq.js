const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isOpen = answer.style.maxHeight;

    document.querySelectorAll(".faq-answer").forEach((panel) => {
      if (panel !== answer) {
        panel.style.maxHeight = null;
        panel.previousElementSibling.setAttribute("aria-expanded", "false");
        panel.classList.remove("open");
      }
    });

    if (isOpen) {
      answer.style.maxHeight = null;
      question.setAttribute("aria-expanded", "false");
      answer.classList.remove("open");
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      question.setAttribute("aria-expanded", "true");
      answer.classList.add("open");
    }
  });
});
