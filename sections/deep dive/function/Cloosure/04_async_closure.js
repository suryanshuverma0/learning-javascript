function createDelayedLogger(delay) {
  return function (message) {
    setTimeout(function () {
      console.log(message);
    }, delay);
  };
}

const logHello = createDelayedLogger(1000); 
const logWorld = createDelayedLogger(2000);
logHello("Hello"); // ? hello
logWorld("World"); // ? world
