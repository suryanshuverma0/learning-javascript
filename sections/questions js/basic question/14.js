const array = [];
array.push(1);
array.push(2);
array.push(3);
array.push(4);
// console.log(array);

// console.log(array.join(''));

let res = array.sort(function (a, b) {
  return b - a;
});
// console.log(res);

const newArray = array.map((value , index , array) => {
   return(value *2);
});
// console.log(newArray);

const filteredArray = array.filter((value)=>{
   return  value % 2 === 0;
         
})      
console.log(filteredArray);


const reducedArray = array.reduce((acc, value) => {
         return acc + value;
},0);
console.log(reducedArray);