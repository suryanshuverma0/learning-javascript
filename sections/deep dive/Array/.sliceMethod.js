const numberArray = new Array();
numberArray.push(1);
numberArray.push(2);
numberArray.push(3);
numberArray.push(1);
numberArray.push(54);
numberArray.push(544);
numberArray.push(123);
numberArray.push(24);
// console.log(numberArray);

const slicedArray = numberArray.splice(1 , 3);
console.log(slicedArray);