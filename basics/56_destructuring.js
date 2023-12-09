// Basic array destructuring
const numbers1 = [1, 2, 3];
const [first1, second1 , third1 , fourth1] = numbers1;

console.log(first1); // 1
console.log(second1); // 2
console.log(third1); // 3
console.log(fourth1); // undefined

// Default values for array destructuring
const numbers2 = [1];
const [first2 = 0, second2 = 0] = numbers2;

console.log(first2) // 1
console.log(second2); // 0




