// Record the time when the page loads
let startTime = Date.now();

// Get references to the buttons and result
let yesButton = document.getElementById("btn-yes");
let noButton = document.getElementById("btn-no");
let result = document.getElementById("decision-result");
let nextButton = document.getElementById("page7-next");

// This function runs when either YES or NO is clicked
function handleClick(choiceText) {
  // Get the time right now to then compare with startTime
  let endTime = Date.now();
  // Calculate how many seconds passed
  let seconds = (endTime - startTime) / 1000;
  // Round to 2 decimal place
  seconds = seconds.toFixed(2);
  // Put a creepy message into the <p id="decision-result">
  result.textContent =
    'You chose "' +
    choiceText +
    '" in ' +
    seconds +
    " seconds. Decision speed logged.";

  // Show the NEXT button by removing the hidden class
  nextButton.classList.remove("page7-next-hidden");

  // Stop the user from clicking the buttons again
  yesBtn.disabled = true;
  noBtn.disabled = true;
}

// Yes button click handler
yesButton.addEventListener("click", function () {
  handleClick("YES, CONTINUE");
});

// No button click handler
noButton.addEventListener("click", function () {
  handleClick("NO, STOP");
});
