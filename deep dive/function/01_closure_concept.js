function outerFunction(){
         let outerVariable = "I am a outer function";

         function innerFunction(){
                  console.log(outerVariable);
         }
         return innerFunction;
}

let closure = outerFunction();

closure();
//A closure is a function with its lexical environment.