const questions = document.querySelectorAll(".faq-item");

questions.forEach((question) => {
  question.addEventListener("toggle", openOneOnly);
});

function openOneOnly(e) {
  if (this.open) {
    questions.forEach((question) => {
      if (question != this && question.open) {
        question.open = false;
      }
    });
  }
}

const details = document.querySelector("details");
details.addEventListener("click", function (e) {
  if (details.hasAttribute("open")) {
    e.preventDefault();
    details.classList.add("closing");
    setTimeout(() => {
      details.removeAttribute("open");
      details.classList.remove("closing");
    }, 400);
  }
});
