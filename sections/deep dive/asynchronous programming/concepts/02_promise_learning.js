//Generate random number between 0 and 9 and if the number is less than 5 resolve it and if the number is greater than 5 reject it

let promise = new Promise((resolve, reject) => {
  var number = Math.floor(Math.random() * 10);
  if (number < 5) {
    return resolve();
  } else {
    return reject();
  }
});

promise.then(function () {
  console.log("Number less than 5");
});
promise.catch(function () {
  console.error("Number is less than 5");
});
