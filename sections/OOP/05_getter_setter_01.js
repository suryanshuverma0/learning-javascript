class Person{
         constructor(){
                  this.name ="";
                  this.age = 0;
         }

         get name(){
                  return this._name;
         }
         set name(x){
                  return this._name = x;
         }

         get age(){
                  return this._age;
         }
         set age(x){
                  return this._age = x;
         }
}

const Person1 = new Person();
Person1._name ="Roman";
Person1._age = 20;
console.log(Person1);