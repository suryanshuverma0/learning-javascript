//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).\
//Lexical Scoping

function main(name) {
  function displayName() {
    console.log(name);
  }

  return displayName;
}

const name1 = main("Suryanshu");
name1()
const name2 = main("Cnintu");
name2()
