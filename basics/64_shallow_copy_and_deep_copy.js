//shallow copy of the array
let originalArray = [1, 2, 3];
let shallowCopy = originalArray.slice();

// Modifying the shallow copy
shallowCopy.push(4);

console.log(originalArray); // [1, 2, 3]
console.log(shallowCopy);   // [1, 2, 3, 4]


//Deep copy of the array
let originalArrayDeep = [[1, 2], [3, 4]];
let deepCopy = JSON.parse(JSON.stringify(originalArrayDeep));

// Modifying the deep copy
deepCopy[0][0] = 100;

console.log(originalArrayDeep); // [[1, 2], [3, 4]]
console.log(deepCopy);      // [[100, 2], [3, 4]]


//shallow copy of an object
let originalObject = {
         name: "John",
         age: 30,
         hobbies: ["reading", "painting"]
       };
       
       // Creating a shallow copy
       let shallowCopyObj = Object.assign({}, originalObject);
       
       // Modifying the shallow copy
       shallowCopyObj.age = 31;
       shallowCopyObj.hobbies.push("coding");
       
       console.log(originalObject);
       // {
       //   name: "John",
       //   age: 30,
       //   hobbies: ["reading", "painting", "coding"]
       // }
       
       console.log(shallowCopyObj);
       // {
       //   name: "John",
       //   age: 31,
       //   hobbies: ["reading", "painting", "coding"]
       // }
       

//Deep copy of an object
let originalObjectDeep = {
         name: "John",
         age: 30,
         hobbies: ["reading", "painting"]
       };
       
       // Creating a deep copy
       let deepCopy = JSON.parse(JSON.stringify(originalObjectDeep));
       
       // Modifying the deep copy
       deepCopy.age = 31;
       deepCopy.hobbies.push("coding");
       
       console.log(originalObjectDeep);
       // {
       //   name: "John",
       //   age: 30,
       //   hobbies: ["reading", "painting"]
       // }
       
       console.log(deepCopy);
       // {
       //   name: "John",
       //   age: 31,
       //   hobbies: ["reading", "painting", "coding"]
       // }
       