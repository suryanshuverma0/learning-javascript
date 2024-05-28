function sum(...args) {//this is the concept of the rest parameter
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(sum(5,6,6,5,5));