const numbers = [1, 11, , 44, 45, 55, 32, 33, 34, 4, 10, 34];

const newNumberFiltered = numbers.filter((number) => {
  return number % 2 == 0;
});
console.log(newNumberFiltered);

const findedNumber = numbers.find((number) => {
  return number % 2 == 0;
});

console.log(findedNumber);

//filter return new array of numbers but the find returns first value matched.