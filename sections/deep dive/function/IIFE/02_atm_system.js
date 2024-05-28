const atm = function (initialbalance) {
  let balance = initialbalance;
  function withdraw(amount) {
    if (amount > balance) {
      return "Are you kidding ?";
    } else {
      balance -= amount;
      return balance;
    }
  }
  return { withdraw };
};
const suryanshu = atm(1000);
console.log(suryanshu.withdraw(100));
//this is one of the practical application of the IIFE. in this particular case the amount is private , i.e without withdrawing the amount user cannot see their balance.
