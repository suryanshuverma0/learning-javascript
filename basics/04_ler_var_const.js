console.log("There is quite difference between let , var and const in JavaScript");


//var can be ree declared dnd modified   so it is strictly prohibited to use the var in the code.

var a=6;
console.log(a);
var a="programming";
console.log(a);

//let can be modified but not re declared  so it is highly referred to use let rather than that var

let x= 8;
console.log(x);
x="coding";
console.log(x);

//const can neither be modified nor re declared  so it is good to use const until it is required to make change in the value of the variable  
//it is important to remember that when we declare the const it should initialize it simultaneously.

const b= 5;
console.log(b);
//b=56; this will throw error
console.log(b);