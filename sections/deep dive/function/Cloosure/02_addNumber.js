function adderFunciton(num1) {
  function adder(num2) {
    console.log(num1 + num2);
  }

  return adder;
}
const add2 = adderFunciton(2);
add2(5);

const add10 = adderFunciton(10);
add10(8);
add10(5);
add10(1);
