let details = {
  firstName: "Suryanshu",
  lastName: "Verma",
  age: 21,
};

let copy = {};

for (let key in details) {
  copy[key] = details[key];
}

//console.log(copy);

copy.age=20;
//console.log(copy);

let cloning = Object.assign({
         school: "Advanced College of Engineering and Management",
}, details);
cloning["age"]=35;
//console.log(cloning);



let user ={
         name:"Suryanshu Verma",
         age: 21,
         sayHi(){
                  return `HI, ${this.name} your age is ${this.age}`
         }
}
console.log(user.sayHi());