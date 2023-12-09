// const numbers = [1,2,3,4,5];
// numbers.forEach(function (number){
//          console.log(number);         
// })

//Given an array of strings, use forEach() to capitalize the first letter of each string and update the array in place.
const arr1 = ["suryanshu", "satish", "chintu"];

arr1.forEach(function (element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(2);
});

console.log(arr1);

//Given an array of numbers, use forEach() to calculate and display the sum of all elements in the array.
let array = [2, 5, 6 ,1];
let sum =0; 
array.forEach(function (add){
         sum = sum+add;
})
console.log(`The sum is ${sum}`);