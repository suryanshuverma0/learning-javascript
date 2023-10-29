// function sayHi(first_name , last_name){

//          function getName(){//this is a closure functon
//                   return first_name + " " + last_name;
//          }

//          console.log(`Hi , ${getName()}`);
// }

// sayHi("Roman" , "Sharma");
// sayHi("Suryanshu" , "Verma");


function generateGreeting(first_name, last_name, greeting) {
         return `${greeting}, ${first_name} ${last_name}`;
       }
       
       function sayHi(first_name, last_name) {
         console.log(generateGreeting(first_name, last_name, "Hi"));
       }
       
       function sayBye(first_name, last_name) {
         console.log(generateGreeting(first_name, last_name, "Bye"));
       }
       
       sayHi("Roman", "Sharma");
       sayHi("Suryanshu", "Verma");
       sayBye("Roman", "Sharma");
       sayBye("Suryanshu", "Verma");
       
