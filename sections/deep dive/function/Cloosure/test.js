// function counter() {
//   let count = 0;

//   return {
//     increment: function() {
//       count++;
//       console.log(count);
//     },
//     decrement: function() {
//       count--;
//       console.log(count);
//     },
//     getCount: function() {
//       return count;
//     }
//   };
// }

// const myCounter = counter();
// myCounter.increment(); // ?
// myCounter.increment(); // ?
// myCounter.decrement(); // ?
// console.log(myCounter.getCount()); // ?

// function createMultiplier(multiplier) {
//   return function(number) {
//     return number * multiplier;
//   };
// }

// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// console.log(double(5)); // ? 10
// console.log(triple(5)); // ? 15
// console.log(double(10)); // ? 20
// console.log(triple(10)); // ? 30

function createPrinter() {
  let message = "Hello, ";

  return function(name) {
    console.log(message + name);
  };
}

const printWelcome = createPrinter();
const printGoodbye = createPrinter();

printWelcome("Alice"); // ?
printGoodbye("Bob");   // ?

