//Without using ES6
function add(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

// let result = add(1)(2)(3)(4)
// console.log(result)

// const step1 = add(1);
// const step2 = step1(2);
// const step3 = step2(3);
// const step4 = step3(4);
// const result = step4;
// console.log(result)

//Using Es6 syntax

const addNumber = (a) => (b) => (c) => (d) => {
  return a + b + c + d;
};
const res = addNumber(1)(2)(3)(4);
console.log(res);
