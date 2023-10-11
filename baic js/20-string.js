const details ="Name : Suryanshu Verma \n Age : 20"; 
const additional = "\nField of Study : Computer Science Engineering";
console.log(details);

//Some important string methods

console.log(details.length);
console.log(details.toUpperCase());
console.log(details.toLocaleLowerCase());
console.log(details.charAt(17));
console.log(details.concat(details , additional));
console.log(details.indexOf('V',18));// second argument-> index
console.log(details.slice(7 , 17));
console.log(details.trim());//removes white spaces from beginning and end from string.
console.log(details.replace('20', '19'));
console.log(details.startsWith('Name'));//returns boolean
console.log(details.endsWith('20'));
console.log(details.includes("Name"));


/*
Note: We cannot change our original strings using these methods, these methods only makes a copy of that string.
*/