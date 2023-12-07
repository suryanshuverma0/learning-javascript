//Immidiately invoked function expression

let ans = (function () {
  let privateVar = 12;

  return {
    getter: function () {
      console.log(privateVar);
    },

    setter: function (val) {
      privateVar = val;
    },
  }
})()


ans.getter();
ans.setter(69);
ans.getter();