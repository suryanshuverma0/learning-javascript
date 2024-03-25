document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "BTC6eaLjQe0BpzXOJUQaPIBK4aijjSOBcONXofUI";
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  const apodImage = document.getElementById("apodImage");
  const imageTitle = document.getElementById("imageTitle");
  const imageExplanation = document.getElementById("imageExplanation");

  // // Fetch APOD data from NASA API
  // fetch(apiUrl)
  //     .then(response => response.json())
  //     .then(data => {
  //         // Display APOD image, title, and explanation
         //  apodImage.src = data.url;
         //  apodImage.alt = data.title;
         //  imageTitle.textContent = data.title;
         //  imageExplanation.textContent = data.explanation;
  //     })
  //     .catch(error => {
  //         console.error('Error fetching APOD data:', error);
  //         imageTitle.textContent = 'Error fetching APOD data';
  //     });

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Error fetching the data....");
      } else {
         apodImage.src = data.url;
         apodImage.alt = data.title;
         imageTitle.textContent = data.title;
         imageExplanation.textContent = data.explanation;
      }
    } catch (error) {
      console.error("Error fetching APOD data:", error);
      imageTitle.textContent = "Error fetching APOD data";
    }
  }
  fetchData();
});
