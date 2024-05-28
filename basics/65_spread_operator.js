const arr = [4, 88, 22, 5, 1, 77];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < arr[i + 1]) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("Greater",arr[0]);
console.log("Less",arr[arr.length-1]);
