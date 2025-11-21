let count = 0; // Initialize click counter

// Messages to reveal based on opening which popup
const revealMessage = {
  1: "Interesting. You clicked exactly when I expected you would.",
  2: "That tiny click shed more data than you realized, I collected all of it",
  3: "You didn’t say anything... yet your click told me enough.",
  4: "Another signal received. You're becoming easier to read with each action.",
};

//Count clicks on the document
document.addEventListener("click", () => {
  count++;
  document.getElementById("clickCount").textContent = "" + count;
});

// Function to show popup and reveal message
document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("click", (event) => {
    // Expand / collapse the popup
    popup.classList.toggle("open");

    // Get popup ID
    let id = popup.getAttribute("data-id");

    // Display the message on right panel
    document.getElementById("revealMessage").textContent = revealMessage[id];
  });
});
