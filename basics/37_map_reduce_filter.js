//Map

let arr= [22 ,45, 33, 56];
let a= arr.map((value , index , array)=>{
         console.log(value, index , array);
         return value+index;
})
// map creates new array
console.log(a);

let array1 =[33 , 55 , 67];
array1.push(454);
let mapping = array1.map((value, index , array) =>{
        // return value + index+ array1;
         console.log(value, index , array);
})


//Filter

let numbers =[44 , 32 , 21 , 67 , 98 , 53, 59];
let even = numbers.filter((value)=>{
         return (value % 2 ==0);
})

console.log(even);

let age =[23, 12 , 65 , 66 , 90, 106 , 5];
let partyEntry = age.filter((value)=>{
         if(value>=18 && value<=65){
                  return true ;
         }
         else{
                  return false;
         }
})
console.log(`You can enter to party since your age is ${partyEntry}`);


//Reduce
let n=[3,2,1];
let pow = n.reduce(( accumulator ,value)=>{// it takes two arguments
         return accumulator+ Math.pow(value,2)
},0)
console.log(pow);

Number1=[1 , 2 , 6 , 4 , 89, 54];
function add(a, b){
         return a + b;
}
let sum =Number1.reduce(add);
console.log("Sum of the number in an Array : "+sum );