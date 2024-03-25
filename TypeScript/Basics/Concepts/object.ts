const cars: { type: string; model: number; price: number } = {
  type: "Fuel",
  model: 4444,
  price: 500000,
};

console.table(cars);
// cars.color: string = "green
// Define a base type for car with known properties
type CarBase = {
  type: string;
  model: number;
  price: number;
};

// Define a new type by extending CarBase with additional properties
type CarWithColor = CarBase & {
  color: string;
};
type CarwithCompany = CarBase &
  CarWithColor & {
    company: string;
  };
// Now you can create an object of type CarWithColor
const car: CarwithCompany = {
  type: "Fuel",
  model: 4444,
  price: 500000,
  color: "green",
  company: "Ferrari",
};

console.table(car);
