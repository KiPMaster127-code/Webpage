const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    
    document.querySelectorAll(".faq-answer").forEach((panel) => {
      if (panel !== answer) {
        panel.style.maxHeight = null;
      }
    });

    
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});