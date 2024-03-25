function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { data: "Data fetched successfully." };
      resolve(data);
      reject(new Error("Failed to fetch data!"));
    }, 5000);
  });
}

async function fetchDataAsync() {
  try {
    console.log("Fetching data...");
    const result = await fetchData();
    console.log(result);
  } catch (err) {
    console.error(error.message);
  }
}

fetchDataAsync();



