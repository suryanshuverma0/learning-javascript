"use strict"
let a = 15;
let b = 5;

let operator = "+"; // Assign a valid operator here

let result; // Declare the result variable outside of the switch

switch (operator) {
  case "+":
    result = a + b;
    console.log(result);
    break;

  case "-":
    result = a - b;
    console.log(result);
    break;

  case "*":
    result = a * b;
    console.log(result);
    break;

  case "/":
    result = a / b;
    console.log(result);
    break;

  default:
    console.log("Invalid operator");
}
