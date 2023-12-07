console.log(this);

let x = this;
console.log(x);

function thisFunction() {
  let x = 5 + 6;
  console.log(x);
  return this;
}
thisFunction();

const person = {
  fname: "Suryanshu",
  lname: "Verma",
  age: 18,
  faculty: "Computer Science",
  details: function () {
    return this.fname + " " + this.lname;
  },
};
console.log(person);
console.log(person.details());
