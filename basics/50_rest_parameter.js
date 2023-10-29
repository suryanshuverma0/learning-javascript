//rest parameter 

function sum(...args){
         var add = 0;
         for(let arg of args){
                  add += arg;
         }
         return add;
}

// console.log(sum(1,2));
// console.log(sum(1,2,3));
// console.log(sum(1,2,3,4));

function display(first_name , last_name , ...args){
         console.log(`Welcome ${first_name} ${last_name}! `);
         console.log(args[0]);
         console.log(args[1]);

}

display("Roman", "Sharma" , 21 ,"ACEM");
display("Suryanshu", "Verma" , 20 ,"ACEM");
// this is the concept of the rest parameters.
//the rest parameter must always be at the end of tbe arguments.






