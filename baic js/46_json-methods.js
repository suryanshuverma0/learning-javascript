let user = {
  name: "John",
  age: 21,
  address: {
    city: "Kathmandu",
    country: "Nepal",
  },
};

let json = JSON.stringify(user);
console.log(json);
console.log(typeof json);