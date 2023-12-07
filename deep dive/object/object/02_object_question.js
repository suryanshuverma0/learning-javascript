// Create an object called calculator with methods for basic operations (addition, subtraction, multiplication, and division). Use these methods to perform some calculations.

const calculator = {
         addition(val1 , val2){
                  return val1 + val2;
         },
         substraction(val1 , val2){
                  return val1 - val2;
         },
         multipication(val1 , val2){
                  return val1 * val2;
         },
         division(val1 , val2){
                  try{
                          if(val2==0){
                           throw("division by zero cannot be used");
                          } 
                  }
                  catch(e){
                           console.log(e.message);
                  }
                  return val1 / val2;
         },
};

console.log(calculator.addition(5,6));

console.log(calculator.substraction(15,6));

console.log(calculator.multipication(15,6));