const btn = document.getElementById("register");
btn.addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;

  // const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

  // existingUsers.push({username: username, password: password});

  // localStorage.setItem('users', JSON.stringify(existingUsers));
  const usernameC = localStorage.getItem("username");
  if(username === usernameC){
    alert("Username already exists");
  }

else{

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  alert("Your account has been registered successfully");
  window.location.href = "/login.html";
}


  

});
