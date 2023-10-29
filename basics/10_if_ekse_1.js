//let age=prompt("Enter your age");//prompt function will not run directly in vs code  as it is made for browser and to run this we need the node js module 
const age=28;
console.log("The age is : ",age);
 //age = parseInt(age);//This inbuilt function is used to convert string to number which is called typecasting.
 console.log(typeof (age));
 console.log(age);


 if(age>=10){
         console.log("You can drive");
 }
 else{
         console.log("Please wait for 10 years to get your license.");
 }
