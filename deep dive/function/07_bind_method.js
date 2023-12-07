const person = {
  fullName: function (country, city) {
    return this.fname + " " + this.lname + " lives in " + city + " ," + country;
  },
};

const person1 = {
  fname: "Suryanshu",
  lname: "Verma",
};

const person2 = {
  fname: "Roman",
  lname: "Humagain",
};

let bindFn = (person.fullName.bind(person1, "Nepal", "Kathmandu"));
console.log(bindFn());