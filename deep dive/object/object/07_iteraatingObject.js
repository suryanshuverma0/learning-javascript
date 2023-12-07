const person = {
  fname: "Suryanshu",
  lname: "Verma",
  age: 18,
  sex: "male",
  faculty: "Computer Science",
};

var value = "";
for (let key in person) {
  value = value + " " + person[key];
  console.log(person[key]);
}
console.log(value);

person.nationality = "Nepali";
console.log(person);

console.log(typeof JSON.stringify(person));
