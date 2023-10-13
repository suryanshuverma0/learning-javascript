/*
function foo() {
  let user = {
    name: "Roman",
    age: 30,
    address: {
      street: "New Road",
      city: "Kathmandu",
    },
    education: {
      school: "Shree Lilawati National Academy",
      college: "Khowpa Secondary School",
      University: "Tribhuwan University",
    },
  };
}

console.log(foo().user);
*/ //since it is local variable of the function so it is unreachable
//To make it reachable  it should be returned from the function

function foo() {
  let user = {
    name: "Roman",
    age: 30,
    address: {
      street: "New Road",
      city: "Kathmandu",
    },
    education: {
      school: "Shree Lilawati National Academy",
      college: "Khowpa Secondary School",
      University: "Tribhuwan University",
    },
  };
  return user;
}
console.log(foo()); //it will give whole object as output

//If the object is unreachable it will go to the garbage for memory cleanup automatically so it is necessary to take care of reachability and un reachability  of the objects

//the garbage collection works on algorithm called mark and sweap algorithm