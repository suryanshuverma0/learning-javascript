//Object Accessors are getters and setters

const person = {
  fname: "Suryanshu",
  lname: "Verma",
  age: 19,
  _language: "", // private variable to store language

  set language(language) {
    this._language = language;
  },
  get language() {
    return this._language;
  },
};

person.language = "JavaScript";
console.log(person.language);
// console.log(person);
