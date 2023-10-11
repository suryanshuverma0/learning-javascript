
function compare(a ,b){
         if(a>b){
                  return(`${a} is greater`);
         }
         else if(a==b){
                  return(`${a} and ${b} are equal`);
         }
         else{
                  return(`${b} is greater`);
         }
}

let x= compare(44,44);
console.log(x);