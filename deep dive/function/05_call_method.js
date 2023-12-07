const person = {
  fullName: function (country , city) {
    return this.fname + " " + this.lname +" lives in " + city + " ," + country;
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

console.log(person.fullName.call(person1, "Nepal" , "Kathmandu"));//generally  call method take one argument but if we want more than one argument we can modify fullName() as

/*
const person = {
  fullName: function () {
    return this.fname + " " + this.lname + " " + ottheerPerson.fname + " " + ottheerPerson.lname;
  },
};
*/