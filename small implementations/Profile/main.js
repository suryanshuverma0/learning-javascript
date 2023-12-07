function updateProfile(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const bio = document.getElementById("bio").value;
  const profile_picture = document.getElementById("profile-picture-url").value;

  document.getElementById("profile-name").innerText = name;
  document.getElementById("profile-email").innerText = email;
  document.getElementById("profile-bio").innerText = bio;
  document.getElementById("profile-picture").src = profile_picture;

  localStorage.setItem("profile-name", name);
  localStorage.setItem("profile-email", email);
  localStorage.setItem("profile-bio", bio);
  localStorage.setItem("profile-picture", profile_picture);
}

document.getElementById("btn").addEventListener("click", updateProfile);

function viewProfile() {
  const historyName = localStorage.getItem("profile-name");
  const historyEmail = localStorage.getItem("profile-email");
  const profileBio = localStorage.getItem("profile-bio");
  const profilePicture = localStorage.getItem("profile-picture");

  document.getElementById("profile-name").innerText = historyName;
  document.getElementById("profile-email").innerText = historyEmail;
  document.getElementById("profile-bio").innerText = profileBio;
  document.getElementById("profile-picture").src = profilePicture;
}
document.getElementById("history").addEventListener("click", viewProfile);
