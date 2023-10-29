    function Detail(name , age , color){
         this.name = name;
         this.age = age;
         this.color = color;
}

// detail1 = new Detail("Roman" , 21 , "red");
// console.log(detail1);

// detail2 = new Detail("Roman" , 22 , "green");
// console.log(detail2);

// detail3 = new Detail("Suryanshu", 23 , "blue");
// console.log(detail3);

for (details in Detail){
         console.log(details);
}