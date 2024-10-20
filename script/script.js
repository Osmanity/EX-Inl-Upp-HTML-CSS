// script.js
document.addEventListener("DOMContentLoaded", function () {
  const startQuizButtons = document.querySelectorAll(".start-quiz-btn");

  startQuizButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const subject = this.closest(".card").getAttribute("data-subject");
      localStorage.setItem("selectedSubject", subject);
      window.location.href = "./pages/Onboarding/onboarding.html";
    });
  });
});

const toggle = document.getElementById("mode-toggle");
const body = document.body;

toggle.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});

// check for saved user preference, if any, on load of the website
document.addEventListener("DOMContentLoaded", (event) => {
  const darkMode = localStorage.getItem("darkMode");

  if (darkMode === "enabled") {
    body.classList.add("dark-mode");
    toggle.checked = true;
  }
});

document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle("active");

    if (button.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }

    // Close other open accordion items
    document.querySelectorAll(".accordion-header").forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove("active");
        otherButton.nextElementSibling.style.maxHeight = 0;
      }
    });
  });
});
