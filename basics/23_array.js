let arr =[1,2,3,5,6,4,6,60];

console.log(arr);
console.log(arr[0]);
 arr[6]= 98; // array is mutable 
console.log(arr);

//methods of array
console.log(arr.push(45));
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.unshift(48));//add elements to beginning 
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.join("+"));
console.log(arr);
console.log(arr.sort());
console.log(arr);
console.log(arr.reverse());
console.log(arr);
console.log(Array.isArray(arr));
console.log(arr); 
console.log(arr.indexOf(5));
console.log(arr);
console.log(arr.lastIndexOf(6));
console.log(arr);
delete arr[0];// this will not decrease arr length
console.log(arr);
console.log(arr.length);
// console.log(arr.map());  this method requires a call back function
// console.log(arr.filter()); this method requires a call back function

