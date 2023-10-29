const person ={
         firstName: "Roman",
         lastName: "Humagain",
         fullName: function(){
                  return `${this.firstName}+ ${this.lastName}`;
         },
};

console.log(person.fullName());