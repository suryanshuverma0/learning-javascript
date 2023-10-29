//Object Literals
let details={
         name: "Suryanshu Verma",
         age: 21,
         email:"veenasa676@gmail.com",
};

console.log(details);
//Constructor Function
function Details(name , age , id){
         this.name = name;
         this.age = age;
         this.id = id;
}

let details1 = new Details("Surayanshu", 21 , 80);
console.log (details1);

let details2 = new Details("Roman Humagain" , 32 , 55);
console.log(details2);

//Object.create
const personDetails= Object.create(null);
personDetails["Name"]="Suresh";
personDetails['Age']=49;
console.log('Person Details',personDetails);