const buttons = document.querySelectorAll(".trick-btn");
const nextBtn = document.getElementById("page6-next");
const centerMessage = document.getElementById("page6-message");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Show the center message
    centerMessage.style.display = "block";

    // Create creepy text under the clicked button
    const msg = document.createElement("div");
    msg.className = "page6-creepy-message show";
    msg.innerText = "We recorded that click.";

    // Position message under clicked button
    msg.style.left = btn.offsetLeft + "px";
    msg.style.top = btn.offsetTop + btn.offsetHeight + 5 + "px";

    document.getElementById("page6-button-area").appendChild(msg);

    // Reveal NEXT button
    nextBtn.classList.remove("page6-next-hidden");
  });
});
