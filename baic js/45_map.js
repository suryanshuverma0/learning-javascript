
const c={};
const d = {};
const myObj = {};
myObj[c] ='c';
myObj[d] ='d';
//last object completely override other object so to overcome this problem map is used.
console.log(myObj) 


const a={};
const b={};
const myMap = new Map([[a , 'a'], [b , 'b']]);

console.log(myMap);

const map1 = new Map([['name' , 'Suryanshu'],['surname' , 'Verma']]);//key pair
console.log(map1);

console.log(map1.get('name'));

map1.set('name' , 'Suryanshu Verma');
console.log(map1);

//other methods are delete , has , size and clear same as set 