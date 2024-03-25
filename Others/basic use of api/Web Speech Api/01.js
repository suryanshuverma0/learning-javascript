const input = document.getElementById("inputText");
const speakButton = document.getElementById("speak");
const outputDiv = document.getElementById("outputDiv");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

let speech;

// Check for browser support
if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
  // Use the unprefixed or prefixed API based on availability
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  speech = new SpeechRecognition();

  speech.onstart = () => {
    outputDiv.textContent = "Listening........";
  };
  speech.onresult = (event) => {
    const result = event.results[0][0].transcript;
    outputDiv.textContent = `You said: ${result}`;
  };
  startBtn.addEventListener("click", () => {
    speech.start();
  });

  stopBtn.addEventListener("click", () => {
    if (speech && speech.state === "listening") {
      // Check if the recognition is in progress
      speech.stop();
      outputDiv.textContent = "Speech recognition stopped.";
    }
  });
} else {
  // Handle lack of support
  outputDiv.textContent =
    "Speech recognition is not supported in this browser.";
  startBtn.disabled = true;
  stopBtn.disabled = true;
}

speakButton.addEventListener("click", () => {
  const textToSpeak = input.value;
  if (textToSpeak) {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Please enter text to speak.");
  }
});
