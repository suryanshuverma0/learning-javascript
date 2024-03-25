const myWord = document.getElementById("myWord");
const computerWord = document.getElementById("computerWord");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const message = document.getElementById("message");
const convert = document.getElementById("convert");
const languageSelect = document.getElementById("languageSelect");

// Object containing phrases and corresponding responses
const responses = {
  computer: "Hello! How can I help you?",
  "tell me a joke":
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "what is your name": "I am a web-based assistant. You can call me Assistant.",
  "who is the president":
    "I am sorry, I do not have real-time information. Please check a reliable source.",
  "how are you":
    "Thank you for asking. I am just a program, so I don't have feelings, but I'm here to help!",
  "tell me about yourself":
    "I am a virtual assistant designed to assist with information and tasks.",
  "open sesame": "I'm sorry, I can't do that. Try asking me something else!",
  "who created you":
    "I was created by Suryanshu Verma, a researcher and engineer working on artificial intelligence.",
  "what is the meaning of life":
    "The meaning of life is a philosophical question. Many people have different perspectives on it.",
  "tell me the time": () => {
    const currentTime = new Date().toLocaleTimeString();
    return `The current time is ${currentTime}`;
  },
  goodbye: () => {
    return "Goodbye Suryanshu Verma";
  },
};

// Declare speech globally
const speech =
  ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) &&
  "speechSynthesis" in window
    ? new (window.webkitSpeechRecognition || window.SpeechRecognition)()
    : null;

if (speech) {
  speech.interimResults = false;
  speech.maxAlternatives = 3;
  speech.continuous = false;

  speech.onstart = () => {
    message.textContent = "Speech Recognition starting....";
  };

  speech.onresult = (event) => {
    if (event.results && event.results.length > 0) {
      const result = event.results[0][0].transcript;
      myWord.textContent = `You said: ${result}`;
      // Check if the transcript contains any of the specified phrases
      for (const phrase in responses) {
        if (result.includes(phrase)) {
          const response = responses[phrase];
          // If the response is a function, execute it; otherwise, speak the response
          typeof response === "function"
            ? respond(response())
            : respond(response);
          break; // Stop checking once a matching phrase is found
        }
      }
    } else {
      myWord.textContent = "No speech detected";
    }
  };
  function respond(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
    computerWord.textContent = text;
  }

  speech.onstop = () => {
    message.textContent = "Stop listening....";
  };
  start.addEventListener("click", () => {
    if (speech) {
      speech.start();
    }
  });
  stop.addEventListener("click", () => {
    if (speech) {
      speech.stop();
      myWord.textContent = ""; // Clear the displayed text
      computerWord.textContent = "";
      speech.stop();
    }
  });

  speech.onerror = (event) => {
    console.error(`Speech recognition error: ${event.error}`);
  };
  convert.addEventListener("click", () => {
    const textToSpeech = myWord.textContent;
    if (textToSpeech) {
      const utterance = new SpeechSynthesisUtterance(textToSpeech);

      // Set the voice to a female voice, if available
      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find((voice) => voice.name.includes("Female"));
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }

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

function populateVoices() {
  const voices = window.speechSynthesis.getVoices();
  // console.log(voices);

  languageSelect.innerHTML = "";

  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.lang;
    option.text = `${voice.name} (${voice.lang})`;
    languageSelect.add(option);
  });

  // Set the initial language based on the selected option
  speech.lang = languageSelect.value;

  // Update the speech language when the selection changes
  languageSelect.addEventListener("change", () => {
    speech.lang = languageSelect.value;
  });
}

// Use SpeechSynthesis to get available voices
window.speechSynthesis.addEventListener("voiceschanged", populateVoices);
