const message = document.getElementById("message");
const myWord = document.getElementById("myWord");
const computerWord = document.getElementById("computerWord");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const convert = document.getElementById("convert");

let speech;
if (
  "SpeechRecognition" in window ||
  "webkitSpeechRecognition" in window
) {
  const SpeechRecognition =
    window.webkitSpeechRecognition || window.speechRecognition;
  speech = new SpeechRecognition();

  // Set the language to English (United States)
  speech.lang = "en-US";

  // Set interimResults to false
  speech.interimResults = false;

  //sets maximum number of alternatives in the speech   : default -->1
  speech.maxAlternatives = 3;

  //: Controls whether speech recognition should continue listening after a result is returned. Set to true for continuous recognition.
  speech.continuous = false;

  speech.onstart = () => {
    message.textContent = "Listening.....";
  };
  speech.onresult = (event) => {
    if (event.results && event.results.length > 0) {
      const result = event.results[0][0].transcript;
      myWord.textContent = `You said: ${result}`;
    } else {
      myWord.textContent = "No speech detected";
    }
  };

  speech.onstop = () => {
    message.textContent = "Stop listening....";
    stop.addEventListener("click", () => {
         speech.stop();
       });
    
  };
  start.addEventListener("click", () => {
    speech.start();
  });
 
  speech.onerror = (event) => {
    console.error(`Speech recognition error: ${event.error}`);
  };

  convert.addEventListener("click", () => {
    const textToSpeech = myWord.textContent;
    if (textToSpeech) {
      const utterance = new SpeechSynthesisUtterance(textToSpeech);
      window.speechSynthesis.speak(utterance);
      computerWord.textContent = textToSpeech;
    } else {
      alert("Please enter text to speak.");
    }
  });
} else {
  message.textContent =
    "SpeechRecognition is not supported on this browser. Sorry!";
  start.disabled = true;
  stop.disabled = true;
}