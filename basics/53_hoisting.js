// Hoisting is the concept in JavaScript that assumes variables and functions are
// declared at the top but not initialized; they are hoisted with an initial value
// of 'undefined'.

// For var:
console.log(a); // undefined (var variables are hoisted and initialized)
var a;

// console.log(b); // undefined (hoisted and initialized)
var b = 7;

console.log(x); // This will console 'Hi' as it is hoisted.
var x = function() {
  console.log("Hi");
};
x();

// Function declarations can be used before their actual declarations.
// However, function expressions assigned to variables behave differently.

// console.log(x); // Error: x is not a function
// x();

// Arrow functions are not hoisted.
// var y = () => {
//   console.log("Arrow Function");
// };
// y(); // Error: y is not a function

// For let and const:
// Hoisting still applies, but the variables are not initialized, leading to a
// 'ReferenceError' if accessed before declaration.

// console.log(variable1); // ReferenceError: variable1 is not defined
// let variable1 = 6;

// console.log(variable2); // ReferenceError: variable2 is not defined (same as let)
// const variable2 = 5;

// variable3(); // ReferenceError: variable3 is not a function
// let variable3 = function() {
//   console.log("Function expression using let");
// }
// The same applies to 'const'.
