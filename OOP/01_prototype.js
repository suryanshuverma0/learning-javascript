//creating a object

let a ={
         name: "Suryanshu Verma",
         age: 19,
         sayHi : ()=>{
                  console.log(`Hi , ${this.name}`)
         }
}

p = {
         programming : true,
         engineering : true,
}

a.__proto__ = p;
console.log(a.programming, a.engineering);  //first it searches in object a  and if not found it searches in object p theis is prototype

p.__proto__ ={
         color:"red",
         field: "Information Technology",
}

console.log(a.color);// first it searches in object a and if not found it searches in object p and if not found it searches in object prototype of the object  this chain is continous 
//we can create as many prototype chain like this.

//It is null or reference of object 