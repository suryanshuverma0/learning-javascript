//sprad synatax
//It is o[[osite to the rest parameters]]
let arr1 = [1,2,3,4,5,6,7,8];

console.log(Math.max(arr1));//This will give NaN
console.log(Math.max(...arr1));

let arr2 = [1,4,7,8,9,4,3,6,5,65,22];
console.log(Math.max(...arr1 , ...arr2));
console.log(Math.max(2,...arr1 ,108, ...arr2));//we can use normal value like this

let merged = [...arr1 , 88, ...arr2];
console.log(merged);

//we can do similar with the string

let str1 = "Hello";
console.log(str1);
console.log(...str1);

//we can use spread with object like above
let obj = {
         a:1,
         b:2,
}

let objCopy= {...obj};
 console.log(obj);
 console.log(objCopy);


 console.log(JSON.stringify(obj) == JSON.stringify(objCopy));//true
 console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); //true
 console.log(obj===objCopy); //false
 console.log(obj==objCopy);//false

obj.c=3;
console.log(obj);
console.log(objCopy);