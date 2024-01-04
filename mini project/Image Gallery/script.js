const imageId = document.getElementById("imageId");
const uploadedImagesContainer = document.getElementById("uploadedImages");

async function fetchData() {
  try {
    const response = await fetch("./image.json");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error fetching the data.", err);
  }
}

function showImage(filter) {
  const data = fetchData().then((data) => {
    const cardsContainer = document.getElementById("imageId");
    cardsContainer.innerHTML = "";

    let found = false;

    if (Array.isArray(data) && data.length > 0) {
      data.forEach(({ title, url, category }) => {
        const card = document.createElement("div");
        card.classList.add("cards");

        if (
          !filter ||
          title.toLowerCase().includes(filter.toLowerCase()) ||
          category.toLowerCase().includes(filter.toLowerCase())
        ) {
          const imgElement = document.createElement("img");
          imgElement.src = url;
          imgElement.alt = title;

          const titleElement = document.createElement("h1");
          titleElement.innerHTML = title;

          const categoryElement = document.createElement("p");
          categoryElement.innerHTML = category;

          card.appendChild(imgElement);
          card.appendChild(titleElement);
          card.appendChild(categoryElement);

          cardsContainer.appendChild(card);
          found = true;
        }
      });
    } else {
      console.log("No data available.");
    }

    if (!found) {
      const noResultElement = document.createElement("p");
      noResultElement.style.fontSize = "65px";
      noResultElement.style.marginTop = "20vh";

      noResultElement.textContent = "No results found.";
      imageId.appendChild(noResultElement);
    }
  });
}

showImage("");

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
  const filter = searchInput.value.trim();
  showImage(filter);
});

