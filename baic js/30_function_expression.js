let age = function(){
         var nowYear = new Date().getFullYear();
         var birthYear = 2003;
         return(nowYear - birthYear);
};

let showAge= age();
console.log(`The age is ${age()}`);