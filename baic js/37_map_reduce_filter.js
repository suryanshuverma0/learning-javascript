let arr= [22 ,45, 33, 56];
let a= arr.map((value , index , array)=>{
         console.log(value, index , array);
         return value+index;
})
//map creates new array
console.log(a);