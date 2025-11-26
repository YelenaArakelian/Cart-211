let revealBtn = document.getElementById("reveal-profile");
let profileBox = document.getElementById("profile-box");
let nextBtn = document.getElementById("page9-next");

// when clicking reveal button
revealBtn.addEventListener("click", function () {
  profileBox.style.display = "block"; // show profile info
  nextBtn.classList.remove("page9-next-hidden"); // show next button
  revealBtn.disabled = true; // prevent clicking again
});
