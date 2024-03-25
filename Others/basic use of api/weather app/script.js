function getWeather() {
  const apiKey = "27f1f5f01f981c810ddf2dbd9cdfd47e";
  const city = document.getElementById("cityName").value;

  if (!city) {
    alert("Please enter a city name");
    return;
  }
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function displayWeather(data) {
  const weatherInfoDiv = document.getElementById("weatherInfo");

  if (data.cod !== "404") {
    const temperature = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius
    const description = data.weather[0].description;

    weatherInfoDiv.innerHTML = `
             <p>Temperature: ${temperature}°C</p>
             <p>Description: ${description}</p>
           `;
  } else {
    weatherInfoDiv.innerHTML = "City not found";
  }
}
