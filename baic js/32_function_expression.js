// let age = prompt("What is your age?");
// let welcome;
// if (age > 18) {
//   welcome = function() {
//     alert("Welcome");
//   }
// } else {
//   welcome = function() {
//     console.log("Greetings");
//   }
// }
// welcome();
//using the ternary operator
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now  