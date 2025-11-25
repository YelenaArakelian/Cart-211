// Reveal "Next" button on scroll
const scrollReveal = document.getElementById("scrollReveal");
const nextBtn = document.getElementById("page5-next");

window.addEventListener("scroll", () => {
  // How far the user has scrolled (0 → 1)
  let scrollPercent =
    window.scrollY / // how many pixels already scrolled down.
    (document.documentElement.scrollHeight - window.innerHeight); //total height of the whole page.

  // Once user scrolls past 90%
  if (scrollPercent >= 0.9) {
    scrollReveal.style.opacity = "1";
    scrollReveal.style.transform = "translateY(0)"; //Transition up
    nextBtn.classList.remove("disabled");
  }
});
