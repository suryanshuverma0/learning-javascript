let calculator = {
  value: 0,
  add: function (num) {
    this.value += num;
    return this; // Returning `this` allows chaining
  },
  subtract: function (num) {
    this.value -= num;
    return this; // Returning `this` allows chaining
  },
  multiply: function (num) {
    this.value *= num;
    return this; // Returning `this` allows chaining
  },
  divide: function (num) {
    this.value /= num;
    return this; // Returning `this` allows chaining
  },
  getResult: function () {
    return this.value;
  },
};

let result = calculator.add(5).subtract(3).multiply(2).divide(4).getResult();
console.log(result); // Outputs: 2.5
