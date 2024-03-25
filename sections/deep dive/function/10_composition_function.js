// Functions to compose
const add = (x) => x + 2;
const multiply = (x) => x * 3;

// Function composition
const composedFunction = (value) => multiply(add(value));

// Using the composed function
const result = composedFunction(5);
console.log(result);
// Outputs 21

/*
This work as we used to study in provious class 11 12  that
if we have two function f(x) and g(x) then the composite function is calculated by:
fg(x)
first solve for g(x) and then the result of that g(x) is computed witb f(x).

In the above example we have f(x) = x + 2  and g(x) = x * 3 then 
fg(x) = (x + 2) * 3
      = 3x + 6

      As the argument pased is 5 so put 5 in instead of x  then we get :
      = 3 * 5 + 6
      = 21 

      this is how the composite function wofks.
*/