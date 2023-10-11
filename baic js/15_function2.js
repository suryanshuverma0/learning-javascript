 function add(a,b,c){
         return a+b+c;
}

 function add(a,b){
         return a+b;
 }
 //always last function is called when we try to overload the function
const d=add(4,5,6,77);
console.log(d);
