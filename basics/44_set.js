const myArray =[1,2,3,4,5];
const mySet = new Set(myArray);

// console.log(myArray);
// console.log(mySet);

const uniqueArray = [...mySet];
//console.log(uniqueArray);
//set is used to remove the duplicate elements of the array

mySet.add(6);
console.log(mySet);

mySet.delete(4);
console.log(mySet);

console.log(mySet.has(5));
console.log(mySet.size);

mySet.clear();
console.log(mySet);


