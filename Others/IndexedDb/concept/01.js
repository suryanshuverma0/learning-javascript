document.addEventListener("DOMContentLoaded", function () {
  var db;

  // Open or create the IndexedDB database
  var request = indexedDB.open("UserDataDB", 1);

  request.onerror = function (event) {
    console.error("Error opening database:", event.target.error);
  };

  request.onupgradeneeded = function (event) {
    // Create an object store (table) to store user data
    db = event.target.result;
    var objectStore = db.createObjectStore("userData", { keyPath: "email" });

    // Define the structure of the data
    objectStore.createIndex("name", "name", { unique: false });
    objectStore.createIndex("password", "password", { unique: false });
  };

  request.onsuccess = function (event) {
    db = event.target.result;
    console.log("Database opened successfully");

    // Add an event listener to the form's submit button
    var submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", storeData);

    // Display the existing data
    displayData();
  };

  function storeData() {
    // Get form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Create a transaction and an object store
    var transaction = db.transaction(["userData"], "readwrite");
    var objectStore = transaction.objectStore("userData");

    // Add the user data to the object store
    var userData = {
      name: name,
      email: email,
      password: password,
    };

    var request = objectStore.add(userData);

    request.onsuccess = function (event) {
      console.log("Data added successfully");
      // Display the updated data
      displayData();
    };

    request.onerror = function (event) {
      console.error("Error adding data:", event.target.error);
    };
  }

  function displayData() {
    // Get the user data from the object store and display it
    var transaction = db.transaction(["userData"], "readonly");
    var objectStore = transaction.objectStore("userData");
    var userDataList = document.getElementById("userDataList");

    // Clear the existing list
    userDataList.innerHTML = "";

    // Open a cursor to iterate through the data
    objectStore.openCursor().onsuccess = function (event) {
      var cursor = event.target.result;

      if (cursor) {
        // Create a list item for each user
        var listItem = document.createElement("li");
        listItem.textContent =
          "Name: " +
          cursor.value.name +
          ", Email: " +
          cursor.value.email +
          ", Password: " +
          cursor.value.password;
        userDataList.appendChild(listItem);

        // Move to the next item in the cursor
        cursor.continue();
      }
    };
  }
});
