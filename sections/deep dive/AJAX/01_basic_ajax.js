const data = document.getElementById("data");
const fetchData = document.getElementById("fetchData");
fetchData.addEventListener("click", () => {
  const xml = new XMLHttpRequest();

  xml.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

  xml.onprogress = () => {
    console.log(" work on progress");
  };

  xml.onload = () => {
    data.textContent = xml.responseText;
  };
  xml.send();
});
