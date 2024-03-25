// Given an object with user information, write a function to update the user's email address. Ensure the function handles cases where the email is missing.

const userInformation = {
         name :"Suryanshu Verma",
         age : 28,

         updateEmail:function(newEmail){
                  this.email = newEmail;

                  return this.email;
         },
};

userInformation.updateEmail("veenasa676@gmail.com");
console.log(userInformation);