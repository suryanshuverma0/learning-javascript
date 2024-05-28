function createIncrementer() {
  let counter = 0;

  function increment() {
    counter++;
    console.log(counter);
  }

  function decrement() {
    counter--;
    console.log(counter);
  }

  return {
    increment,
    decrement,
  };
}

// const myCounter = createIncrementer();
// myCounter.increment(); // ? 1
// myCounter.increment(); // ? 2
// myCounter.decrement(); // ? 1

function outerFunction(outerVariable) {
  return function (innerVariable) {
    console.log("Outer variable:", outerVariable);
    console.log("Inner variable:", innerVariable);
  };
}

const innerFunction = outerFunction("Outer value");

innerFunction("Inner value");
//outer value and inner value
