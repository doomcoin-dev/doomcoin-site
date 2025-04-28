// puzzle.js
function checkPuzzle() {
  var answer = document.getElementById('puzzle-input').value.trim().toLowerCase();
  if (answer === "collapse") {
    window.location.href = "unlock.html";
  } else {
    document.getElementById('puzzle-message').innerText = "Incorrect. Listen closer to the Doom.";
  }
}
