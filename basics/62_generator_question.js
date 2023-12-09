function* myGenerator() {
  const x = yield "Give me a value";
  yield x + 1;
}

const generator = myGenerator();

console.log(generator.next()); // { value: 'Give me a value', done: false }
console.log(generator.next(10)); // { value: 11, done: false }
console.log(generator.next()); // { value: undefined, done: true }

//genetator can be used in the asynchronous programming