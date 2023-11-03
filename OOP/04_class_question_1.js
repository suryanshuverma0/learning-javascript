class Company{
         constructor(name){
                  this.name = name;
         }
         getDate(){
                  const date = new Date();
                  const fullYear = date.getFullYear();
                  return console.log(fullYear);
         }
         companyOwnerDaetail(fname , lname , age){
                  this.fnamename = fname;
                  this.lname= lname;
                  this.age = age;
         }
}
const company1 = new Company("GadgetHub");
company1.getDate();
company1.companyOwnerDaetail("Suryanshu" , "Verma" , 20);

const company2 = new Company("Apple");
company2.getDate();
company2.companyOwnerDaetail("Steve" , "Jobs" , 67);
const company = [];
company.push(company1);
company.push(company2);
console.log(company);