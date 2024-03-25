//Basic Object Declarations
const person = new Object();
person.name = "Suryanshu";
person.email = "suryanshu@gmail.com";

// console.table(person);
person.name = 'Suryashu Verma';
// console.table(person);

//Object with function
const Name = {
         fname: "Suryanhu",
         lname: "Verma",

         fullName: function(fname , lname){
                  return (fname + " " + this.lname);
         }
};
const res = Name.fullName("Chintu" , "Karna");
// console.log(res);


//Object Iteration
const details = {
         fname : "Suryanhu",
         lname : "Verma",
         age: 21,
         location : "Nepal",
}
for(let key in details){
         console.log(`${key} : ${details[key]}`);
}


