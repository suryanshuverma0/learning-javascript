const man = new Object();
man.name = "Suryanshu";
man.email = "suryanshu@gmail.com";

// console.table(person);
man.name = "Suryashu Verma";
// console.table(person);

const Name = {
  fname: "Suryanhu",
  lname: "Verma",
  fullName: function (fn, ln) {
    return `Previously: ${this.fname} ${this.lname} and now: ${fn} ${ln}`;
  },
};
const res = Name.fullName("Chintu", "Karna");
// console.table(res);

//Iteration in object
for (let key in Name) {
  // console.log(`${key} : ${Name[key]}`);
}
let key = Object.keys(Name);
// console.log(key);
let value = Object.values(Name);
// console.log(value);
let entities = Object.entries(Name);
// console.log(entities);

const { fname, lname } = Name;
// console.log(fname);
// console.log(lname);

//prototype and inheritance
//constructor function
const personMethods = {
  increaseAge: function () {
    return this.age++;
  },
  details: function () {
    this.increaseAge();
    console.log(
      `I am ${this.name} and my age is ${this.age} years old. I am currently learning about ${this.skill}. Now I am from ${this.nationality}.`
    );
  },
};
function Person(name, age, skill, nationality) {
  this.name = name;
  this.age = age;
  this.skill = skill;
  this.nationality = nationality;
}
Person.prototype = personMethods;

const person1 = new Person("Suryanshu", 20, "Javascript", "nepali");
person1.details();

//Object.create
const p1 = Object.create(Person.prototype);
p1.name = "Chintu";
console.log(p1.name);

const person = {
  name: "John",
  age: 30,
};

Object.defineProperty(person, "email", {
  get: function () {
    console.log("Getting email");
    return this._email; // Accessing a private variable
  },
  set: function (value) {
    console.log("Setting email");
    // You can add validation or additional logic here if needed
    this._email = value; // Storing in a private variable
  },
  enumerable: true,
  configurable: true,
});

// Accessing the email property triggers the getter
// console.log(person.email); // Getting email; undefined

// Setting the email property triggers the setter
person.email = "john@example.com"; // Setting email

// Accessing the email property again triggers the getter
// console.log(person.email); // Getting email; john@example.com

//object.freeze and object.seal

const courses = {
  1: "HTML",
  2: "CSS",
  3: "JavaScript",
  4: "React",
};
Object.freeze(courses);
courses[1] = "C++";
courses[5] = "C";

Object.seal(courses);
courses[1] = "C++";
console.log(courses);
