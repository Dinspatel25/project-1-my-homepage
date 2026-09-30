const menuButton = document.querySelector("#menu-button");
const navLinks = document.querySelector("#nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const isExpanded = navLinks.classList.contains("show");

    menuButton.setAttribute("aria-expanded", String(isExpanded));
    menuButton.setAttribute(
      "aria-label",
      isExpanded ? "Close navigation menu" : "Open navigation menu"
    );
  });
}

/* AI Page */

const aiButtons = document.querySelectorAll(".ai-topic-button");
const aiResult = document.querySelector("#ai-topic-result");

const aiTopics = {
  machine:
    "I am interested in how machines can learn from data and use patterns to make useful predictions.",
  computer:
    "Computer vision interests me because computers can process images and understand visual information.",
  future:
    "I am interested in how AI may change software, education, transportation, and other areas in the future.",
};

aiButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const topic = button.dataset.topic;

    aiButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    if (aiResult && aiTopics[topic]) {
      aiResult.textContent = aiTopics[topic];
    }
  });
});

/* Close mobile menu after selecting a page */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (navLinks && menuButton) {
      navLinks.classList.remove("show");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
    }
  });
});
