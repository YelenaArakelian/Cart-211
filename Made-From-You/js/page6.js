// Get all the scattered buttons
const trickButtons = document.querySelectorAll(".trick-btn");

// Get the message and the Next button
const message = document.getElementById("page6-message");
const nextButton = document.getElementById("page6-next");

// When any button is clicked
trickButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Hide all buttons
    trickButtons.forEach((b) => {
      b.style.display = "none";
    });

    // Show message
    message.style.display = "block";

    // Show Next button
    nextButton.style.display = "inline-block";
  });
});
