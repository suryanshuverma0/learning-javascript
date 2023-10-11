//Primitive datatypes
/*
There are seven primitive datatypes in JavaScript
Trick to remember -->  nn ss bb u
1.null 
2. number
3. boolean
4. big int 
5. string
6. symbol (new feature of ES6)
7. undefined

Non primitive datatypes - Objects

*/

let a= null;
let b= 55;
let c= true;
let d= BigInt("555")+BigInt("5");
let e="This is a string";
let f= Symbol("We will see symbol further in details. ");
//New Feature introduced by ECMAScript version-ES6
let g=undefined;
let h;

console.log(a,b,c,d,e,f,g,h);


const lang = {
         "name": "JavaScript",
         "type":"Programming Language"
}

console.log(lang.type);