const person = {
         name : "Suryanshu Verma",
         age : 18 ,
         faculty : "Computer Science" ,
};

let entries = Object.entries(person);
console.log(entries);


Object.entries(person).forEach(([key , value])=>{
         console.log(`${key} : ${value}`);     
});

