// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Animate skill bars on scroll
window.addEventListener("scroll", () => {
  const skillBars = document.querySelectorAll(".skill-progress");
  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      bar.style.width = bar.style.width; // Triggers animation
    }
  });
});

// Animate elements on scroll
document.addEventListener("DOMContentLoaded", () => {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".timeline-item, .skill-item, .project-card"
    );
    elements.forEach((el) => {
      const elTop = el.getBoundingClientRect().top;
      const elBottom = el.getBoundingClientRect().bottom;
      if (elTop < window.innerHeight && elBottom > 0) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Trigger on load
});

// Smooth scroll for anchor links (if needed)
