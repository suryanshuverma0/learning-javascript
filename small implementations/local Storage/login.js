const btn = document.getElementById("login");
btn.addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;


  const usernameC = localStorage.getItem("username");
  const passwordC = localStorage.getItem("password");

  if (username === usernameC) {
    if (password === passwordC) {
      alert("login sucess");
    } else {
      alert("Invalid password");
    }
  } else {
    alert("Invalid username");
  }
});
