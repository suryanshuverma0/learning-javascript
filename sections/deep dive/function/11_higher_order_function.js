function parent(name){
         return function Child(age){
                  console.log(`I am ${name} of age ${age}`); 
         }

}
parent("Suryanshu")(21);