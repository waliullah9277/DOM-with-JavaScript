const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const currentContent = toggle.nextElementSibling;
    const currentIcon = toggle.querySelector("svg");

    // Close all other FAQs
    document.querySelectorAll(".faq-content").forEach((content) => {
      if (content !== currentContent) content.classList.add("hidden");
    });

    document.querySelectorAll(".faq-toggle svg").forEach((icon) => {
      if (icon !== currentIcon) icon.classList.remove("rotate-45");
    });

    // Toggle current FAQ
    currentContent.classList.toggle("hidden");
    currentIcon.classList.toggle("rotate-45");
  });
});
