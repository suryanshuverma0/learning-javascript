function add(a, b){
         return a+b;
}

console.log(add(5,3));


let x=5;
let y = 9;

let result = add(x,y);
console.log(`The sum is ${result}`);


//find the maximum number

function maxNumber(number){
         let max= number[0];

         for(let i=1; i<number.length;i++){
                  if(max<number[i]){
                           max=number[i];
                  }
         }
         return max
}

const number = [5,2,44,22,65,64];
const resultMax = maxNumber(number);
console.log(`The max number is ${resultMax}`);


//reverse string

function reverseStr(str){
         return str.split('').reverse().join('');
}

const string = "hello suryanshu";
const reversedString = reverseStr(string) ;
console.log(`Before ${string}`);
console.log(`Reversed string ${reversedString}`);


