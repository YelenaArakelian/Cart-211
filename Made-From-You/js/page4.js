const scanBox = document.getElementById("scanBox");
const scanResult = document.getElementById("scanResult");
const nextBtn = document.getElementById("page4-next");

// These will track how long the mouse has been moving inside the box
let totalMovementTime = 0;
let lastMoveTime = 0;

// When the user moves their mouse inside the scanning box
scanBox.addEventListener("mousemove", () => {
  const now = Date.now(); // current time in milliseconds

  // If we've moved before, calculate the time between this movement and the previous one
  if (lastMoveTime !== 0) {
    totalMovementTime += now - lastMoveTime;
  }

  // Save this timestamp for the next movement
  lastMoveTime = now;

  // After 2 seconds of movement, reveal the result and unlock Next
  if (totalMovementTime >= 2000) {
    scanResult.style.opacity = "1";
    scanResult.style.transform = "translateY(0)";
    nextBtn.classList.remove("disabled");
  }
});
