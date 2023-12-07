//Array of objects to store song information
const audioSource = [
  {
    name: "Song 1",
    path: "/audio file/01.mp3",
    artist: "Artist 1",
  },
  {
    name: "Song 2",
    path: "/audio file/02.mp3",
    artist: "Artist 2",
  },
  {
    name: "Song 3",
    path: "/audio file/03.mp3",
    artist: "Artist 3",
  },
  {
    name: "Song 4",
    path: "/audio file/04.mp3",
    artist: "Artist 4",
  },
];

//Declalring and Inititlalizing some variables
const audioElement = new Audio();
audioElement.preload = "none";

let currentIndex = 0;
let isMuted = false;

//Populating DOM.
const previous_btn = document.getElementById("previous-btn");
const play_pause_btn = document.getElementById("play-pause-btn");
const next_btn = document.getElementById("next-btn");
const volumeInput = document.getElementById("volume");
const trackInput = document.getElementById("track");

//Fof Playing Audio
function playAudio(index) {
  if (index >= 0 && index < audioSource.length) {
    audioElement.src = audioSource[index].path;
    audioElement.play();
    updateSongInfo(index);
    audioElement.addEventListener("loadeddata", () => {
      updateTrack(index);
      updateTrackSeek();
    });
  }
}
//pausing Auido
function pauseAudio(index) {
  if (index >= 0 && index < audioSource.length) {
    audioElement.src = audioSource[index].path;
    audioElement.pause();
  }
}
//Update the track progress according to time
function updateTrackSeek() {
  audioElement.currentTime = trackInput.value;
}
// Change the song after  a song is ended.
audioElement.addEventListener("ended", () => {
  currentIndex = (currentIndex + 1) % audioSource.length;
  playAudio(currentIndex);
});

//Toggle between the play pause functionality
function togglePlayPause() {
  if (audioElement.paused) {
    playAudio(currentIndex);
    play_pause_btn.innerHTML = `<i class = "fa fa-pause"></i>`;
  } else {
    pauseAudio(currentIndex);
    play_pause_btn.innerHTML = `<i class = "fa fa-play"></i>`;
  }
}
play_pause_btn.removeEventListener("click", togglePlayPause);
play_pause_btn.addEventListener("click", togglePlayPause);

//Toggle to previous song
function togglePrevious() {
  if (!audioElement.paused) {
    currentIndex = (currentIndex - 1 + audioSource.length) % audioSource.length;
    playAudio(currentIndex);
  }
}

//Toggle to next song
function toggleNext() {
  if (!audioElement.paused) {
    currentIndex = (currentIndex + 1 + audioSource.length) % audioSource.length;
    playAudio(currentIndex);
  }
}
previous_btn.addEventListener("click", togglePrevious);
next_btn.addEventListener("click", toggleNext);

//Update the volume
function updateVolume() {
  audioElement.volume = volumeInput.value;
}
volumeInput.addEventListener("input", updateVolume);

//Update the track range
function updateTrack() {
  const duration = audioElement.duration || 0;
  trackInput.max = duration;
  trackInput.value = 0;
}
// audioElement.addEventListener("timeupdate", updateTrackSeek);

//Mute the song when the volume off btn is clicked
document.querySelector(".fa-volume-down").onclick = () => {
  isMuted = !isMuted;
  audioElement.muted = isMuted;
  updateMuteIcon();
};

//Update the song informaiton according to the song
function updateSongInfo(index) {
  const musicTitle = document.querySelector(".music-title");
  if (musicTitle) {
    musicTitle.querySelector("h3").innerText = audioSource[index].name;
    musicTitle.querySelector("h4").innerText = audioSource[index].artist;
  }
}
//Now update the muted icon accordingly
function updateMuteIcon() {
  const muteIcon = document.querySelector(".fa-volume-down");
  if (muteIcon) {
    document
      .getElementById("volume-class-id")
      .classList.remove("fa-volume-down");
    document.getElementById("volume-class-id").classList.add("fa-volume-off");
  } else {
    document
      .getElementById("volume-class-id")
      .classList.remove("fa-volume-off");
    document.getElementById("volume-class-id").classList.add("fa-volume-down");
  }
}
//Update the volume to full when the full volume btn is clicked
function fullVouleume() {
  audioElement.volume = 1;
  volumeInput.value = 1;
}
document.querySelector(".fa-volume-up").addEventListener("click", fullVouleume);
