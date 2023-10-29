const fruits=["apple", "mango", "banana"];
for(let fruit of fruits){
         console.log(fruit);
}

const fruit1=["apple", "mango", "banana"];
for(let fruit in fruits){
         console.log(fruit);
}
/* 
The for...of loop is used to iterate over the values of an iterable object (arrays, strings, maps, sets, etc.).
It provides a simpler and more concise syntax for iterating through elements compared to the traditional for loop.
It directly gives you the value of each element during each iteration, without the need for accessing elements by index or keys.
It is specifically designed for iterating over the elements of iterable objects, making it more suitable for arrays and collections.
It does not include any non-enumerable or inherited properties that might be present in the object's prototype chain.
The order of iteration is guaranteed to be the same as the order of elements in the iterable (for arrays and strings), ensuring predictable behavior.
It is not suitable for iterating over object properties (keys), as it is intended for iterable objects only.
*/