const person = {
         fname: "Suryanshu",
         lname: "Verma",
         age: 25,
}

for(let x in person){
         console.log(`${x} ${person[x]})`);
         console.log(person[x]);
}
//for in loop is a for loop in javascript and it iterates over the keys(properties).It is not recommended for iterating over arrays because it iterates over the indexes rather than the actual values, and it may include additional properties that are added to the array's prototype.The order of iteration in for...in loop is not guaranteed to be the same as the order of elements in the array. The loop may iterate over the keys in an arbitrary order, which can be problematic if you rely on the order of elements.

