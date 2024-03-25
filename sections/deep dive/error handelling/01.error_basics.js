let a = 5;
let num = 0;

try{
         let result = a/num;
         console.log(result);
}
catch(error){
         console.log(error.name + ": " + error.message);
}


try{
         console.log(Hi)
}
catch(error){
         console.log(error.name);
}

try{
         eval("alert(hello");
}
catch(error){
         console.log(error.name);

}