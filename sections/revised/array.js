const array = [1, 2, 3, 4, 5];
array.forEach((arr) => {
  if (arr % 2 === 0) {
    console.log(arr);
  }
});

let res = array.map((arr)=>{
  return arr*10;
});

console.log(res);