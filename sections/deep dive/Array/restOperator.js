const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const restedArray = [...number, 16,17,18,19,20,21,22,23,24,25,26,27]
// console.log(restedArray);

const user = new Object();
user.name = "John Doe";
user.email = "john@doe@gmail.com";
user.password = "12345";
user.age = 21;

// console.log(user);

const newUser = {...user , address: "Kathmandu" , job: "Frontend Manager"};
// console.table(newUser);

const combinedUser = {...user , ...newUser , faculty:{department:"BCT", class: "B2"}};

console.table(combinedUser);