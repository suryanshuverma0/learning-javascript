console.log("This will simply log on consoele");
console.assert(5>6);//assertion will fail
console.assert(55>6);//nothing will happen as it is true
console.error("This is error");//effect will be seen in console
console.warn("This will just warn");
console.clear(); //this will clear the console

const obj={
         a:1,
         b:"b",
         c:2,
}
console.table(obj);//show object in tabular form

console.info();// show information 

console.log(console)//show all method for console
/*
console.time("program");
console.timeEnd("program");
*/// these will show how much time does take to run the program