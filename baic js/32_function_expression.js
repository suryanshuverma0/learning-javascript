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

let num = prompt("Enter the number");
if(num%2==0){
  location.href= "https://www.suryanshu.com.np/";
}

let color = prompt("Enter the bg color you want");
document.body.style.backgroundColor =color ;