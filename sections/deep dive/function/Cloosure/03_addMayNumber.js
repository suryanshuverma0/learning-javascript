function adderFunciton(num1) {
  function innerAdder1(num2) {
    function innerAdder2(...args) {
      const sum = num1 + num2 + args.reduce((acc, cur) => acc + cur, 0);
      console.log(sum);
    }
    return innerAdder2;
  }

  return innerAdder1;
}

const add2 = adderFunciton(2);
const add2And5 = add2(5); 
add2And5(6, 7); 
