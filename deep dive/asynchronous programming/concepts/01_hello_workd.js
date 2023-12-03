function helloWorld(){
         console.log("Hello workd 1");
         console.log("Hello workd 2");
         console.log("Hello workd 3");
         console.log("Hello workd 4");
}
function add(a , b){
         return a + b;
}
console.log(add(5,6));
// setTimeout(helloWorld , 10000);
 const intervalId = setInterval(helloWorld , 10000);

setTimeout(()=>{
         clearInterval(intervalId);
         console.log("cleared");
} , 50000);