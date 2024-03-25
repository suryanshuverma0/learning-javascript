// Create a JavaScript class "BankAccount" with properties for an array of transactions. Add methods to deposit and withdraw funds from the account. Implement a method to calculate the current balance by using the reduce method. Create a "BankAccount" object, perform transactions, and display the current balance.

class BankAccount {
  constructor() {
    this.transactions = [];
  }

  deposit(amount) {
    return this.transactions.push({ amount: amount });
  }
  withdraw(amount) {
    return this.transactions.push({ amount: -amount });
  }
  checkBalance() {
    if (this.transactions.length === 0) {
      return 0;
    }
    const amountInBank = this.transactions.reduce((total, value) => {
      return total + value.amount;
    }, 0);
    return amountInBank;
  }
}

const BankAccount1 = new BankAccount();
BankAccount1.deposit(2000);
BankAccount1.deposit(6000);
BankAccount1.deposit(4000);
BankAccount1.withdraw(2000);
const check = BankAccount1.checkBalance();
console.log(check);
