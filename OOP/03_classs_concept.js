class Person{
         constructor(fname , lname , age , sex){
                  this.fname = fname;
                  this.lname = lname;
                  this.age = age;
                  this.sex = sex;
         }
         sayProfession(profession){
                return  this.profession = profession;
         }
}

const Person1 = new Person("Suryanshu" , "Verma" , 20 , "make");
console.log(Person1);
console.log(Person1.sayProfession("Engineering"));
console.log(Person1.sayProfession("Computer Scince"));
