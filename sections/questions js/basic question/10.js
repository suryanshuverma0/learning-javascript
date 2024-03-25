// generate a random number from the array of numbers

const array = [1, 2, 3, 4, 5,11 , 8, 7 , 9, 12, 13, 14, 15,6];

const random = Math.floor(Math.random() * array.length);

console.log(random , array[random]);

const array2 = ["Ram" , "Shyam" , "Krishna" , "Hari", "Govind"];
const random2 = Math.floor(Math.random() * array2.length);
console.log(random2 , array2[random2]);


const symbol = ["✌️", "🖐️", "👊"];
const random3 = Math.floor(Math.random() * symbol.length);
console.log(random3 , symbol[random3]);// random3 will only give the index of the array so we use symbol[random3] so that it would give value of that index