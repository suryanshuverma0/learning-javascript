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

console.log(String.fromCodePoint(90));
let alphabet= "";
for(let i = 65 ; i <=220 ; i++){
         alphabet= alphabet+ String.fromCodePoint(i);
}
console.log(alphabet);

let str1= "Super station and the process";
let str2= "Andrew infinite or controlled looping and disappear";

console.log(str1.localeCompare(str2));// returns 1 (integer)


let s1 = "Looping";
let s2 = "Looping";
console.log(s1.localeCompare(s2));

let st1 = "looping";
let st2 = "Looping";
console.log(st1.localeCompare(st2)); // returns -1


/*
The call str.localeCompare(str2) returns an integer indicating whether str is less, equal or greater than str2 according to the language rules:

Returns a negative number if str is less than str2.
Returns a positive number if str is greater than str2.
Returns 0 if they are equivalent.
*/