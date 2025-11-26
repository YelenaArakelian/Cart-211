let startTime = Date.now(); // Time
let acceptBtn = document.getElementById("accept-all");
let reviewBtn = document.getElementById("review-data");
let detailPanel = document.getElementById("detail-panel");
let message = document.getElementById("page8-message");
let nextBtn = document.getElementById("page8-next");

// Helper: show NEXT and disable both buttons
function finishChoice() {
  nextBtn.classList.remove("page8-next-hidden");
  acceptBtn.disabled = true;
  reviewBtn.disabled = true;
}

// When user clicks "ACCEPT ALL"
acceptBtn.addEventListener("click", function () {
  // Accept all
  let endTime = Date.now();
  let seconds = ((endTime - startTime) / 1000).toFixed(2);
  // Show message
  message.textContent =
    "You accepted everything in " +
    seconds +
    " seconds. That was all we needed.";
  // Log decision speed
  finishChoice();
});

// When user clicks "Review data use"
reviewBtn.addEventListener("click", function () {
  // Review data use
  detailPanel.style.display = "block";

  // Show message
  ("You tried to read first. Most people never make it here.");
  finishChoice();
});
