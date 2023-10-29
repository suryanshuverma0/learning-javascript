const arr = [1,2,3,4,5];
console.log(arr);

//adding elements of array 
let sum=0;
function add(){
         for(i=0;i<arr.length;i++){
                 sum+= arr[i];
         }
         return sum;
}

const result= add();
console.log(result);