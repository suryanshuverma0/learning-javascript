let count = 0;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    count++;
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      count++;
    }
  }
}

console.log(count);
