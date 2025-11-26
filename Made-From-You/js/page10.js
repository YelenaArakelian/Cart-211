let revealBtn = document.getElementById("page10-reveal");
let columns = document.getElementById("page10-columns");
let nextBtn = document.getElementById("page10-next");

// When the user clicks "SHOW THE LESSONS"
revealBtn.addEventListener("click", function () {
  // show the two columns
  columns.classList.remove("page10-hidden");

  // show the Next button
  nextBtn.classList.remove("page10-next-hidden");
  nextBtn.style.display = "block";

  // stop the button from being clicked again
  revealBtn.disabled = true;
});
