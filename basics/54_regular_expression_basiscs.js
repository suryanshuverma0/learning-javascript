// //REegular expression are used to manipulate the string.
// //REegular expression using rerex literals
// const string = "I am a programmer and I love JavaScript."
// const regex = /love/;
// const result = string.match(regex);
// console.log(result);

// const testResult = regex.test(string);


//Regular expression using constructor
const  word = "Hello I am a programmer and I love JavaScript";
const exp = new RegExp("JavaScript");

const exp_result = exp.test(word);
console.log(exp_result);

