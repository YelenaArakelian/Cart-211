let count = 0;

document.addEventListener("click", () => {
  count++;
  document.getElementById("clickCount").textContent = "" + count;
});
