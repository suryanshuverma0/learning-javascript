const person = {
         fullName: function (country , city) {
           return this.fname + " " + this.lname +" lives in " + city + " ," + country;
         },
       };
       
       const person1 = {
         fname: "Suryanshu",
         lname: "Verma",
       };
       
       const person2 = {
         fname: "Roman",
         lname: "Humagain",
       };
       
       console.log(person.fullName.apply(person1, ["Nepal" , "Kathmandu"]));

       //here the difference in apply and call is that apply takes array as argument but that call doesn't takes array as argument.