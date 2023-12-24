const yes = document.getElementById("yes");
const no = document.getElementById("no");
const dBox = document.querySelector(".costum-dialogue-box");
const message = document.getElementById("message");

function handleYesClick() {
  dBox.style.display = "none";
  message.style.display = "block";
  message.innerHTML = "You have successfully hidden the dialogue box.";
}

yes.addEventListener("click", handleYesClick);

no.addEventListener("click", () => {
  document.getElementById("question").textContent =
    "Are you a JavaScript Developer?";

  // Remove the previous 'handleYesClick' function from 'yes' button
  yes.removeEventListener("click", handleYesClick);

  yes.addEventListener("click", () => {
    document.getElementById("question").textContent =
      "Are you a React Developer?";
    // Add 'handleYesClick' function back to 'yes' button
    yes.addEventListener("click", handleYesClick);
  });
});
