function divide(a , b){
         if(b==0){
                  throw new Error("Divided by zero is not allowed");
         }
         return a/b;
}
try{
        console.log(divide(10,0));
}
catch(e){
         console.log(e.message);
}

try{
         console.log(divide(10,1));
}
catch(e){
         console.log(e.name);
}

try{
         console.log(divide(0,1));
}
catch(e){
         console.log(e.name);
}
