// stores a key value paor in which key can be of any data type
let myMap = new Map();

myMap.set('name', "Suryanshu");
myMap.set('name' , "Roman");
myMap.set('name' , "Sulav");
myMap.set('name', "Surya");
myMap.set('name' , "Rabeen");
myMap.set('age' , "20");

console.log(myMap.get('name')); 
console.log(myMap.get('name'));
console.log(myMap.get('name'));
console.log(myMap.get('age'));

myMap.forEach((key, value)=>{
         console.log(`${key} : ${value}`);
});

