// console.log(isNaN("str"));
// console.log(isNaN(123));
// console.log(isNaN(NaN));
// console.log(isNaN(true));
// console.log(isNaN(undefined));
// console.log(isNaN(null));
// console.log(isNaN({}));
// console.log(isNaN([]));
// console.log(isNaN([1, 2, 3]));
// console.log(isNaN([1, 2, 3]));
// console.log(isNaN([1, 2, 3]));
// console.log(isNaN({ a: 1 }));
// console.log(isNaN({ a: 1, b: 2 }));
// console.log(isNaN({ a: 1, b: 2 }));
// console.log(isNaN({ a: 1, b: 2 }));
// console.log(isNaN(function () { }));

// NaN is a special value in javascript which is not equal to itself
//console.log(NaN == NaN);
//console.log(NaN === NaN);

console.log(Number.isNaN(123));
console.log(isNaN("str"));
console.log(isFinite(55));
console.log(isFinite("555"));
console.log(isFinite("str"));

//Number.isNaN() and Number.isFinite() is more reliable than that of the isNaN and isFinite 