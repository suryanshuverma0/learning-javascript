// IFFE: It stands for Immidately I Invoked Function Expression

(function (a, b) {
  console.log(a+b);
})(2, 3);

const res = (function (a, b) {
  return a + b;
})(2, 3);
console.log(res);

const result = ( (a,b)=>{return a + b;})(2, 3);
console.log(result);

