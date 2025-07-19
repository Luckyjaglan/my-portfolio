// === Scroll to Top Button Logic ===
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === Navbar Show/Hide on Scroll ===
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down: hide navbar
    navbar.classList.add("-translate-y-full");
    navbar.classList.remove("translate-y-0");
  } else {
    // Scrolling up: show navbar
    navbar.classList.remove("-translate-y-full");
    navbar.classList.add("translate-y-0");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// === Smooth Scroll on Navigation Clicks ===
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
