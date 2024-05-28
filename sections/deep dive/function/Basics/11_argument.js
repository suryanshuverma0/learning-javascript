// let sum = (a, b) => {
//   let result = a + b;
//   return result;
// };

// console.log(sum(3, 4));

// function sum(a, b) {
//   let result = a + b;
//   return result;
// }

// console.log(sum(3, 4));


let sum = (...args) => {
        return args.reduce((current , next) => {
                  return current + next;
         }, 0);
}
console.log(sum(3, 4));

