// Reveal "Next" button on scroll
const scrollReveal = document.getElementById("scrollReveal");
const nextBtn = document.getElementById("page5-next");

window.addEventListener("scroll", () => {
  // How far the user has scrolled (0 → 1)
  let scrollPercent =
    window.scrollY / // Current scroll position
    (document.documentElement.scrollHeight - window.innerHeight);

  // Once user scrolls past 90%
  if (scrollPercent >= 0.9) {
    scrollReveal.style.opacity = "1";
    scrollReveal.style.transform = "translateY(0)"; //Transition up
    nextBtn.classList.remove("disabled");
  }
});
