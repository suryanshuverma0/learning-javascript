function combinaionFunction() {
  console.log("This is a outer function variable.");
  
  let a = 0;
  let x = () => {
    let a = 1;
    console.log(a);
    let y = () => {
      let a = 2;
      console.log(a);
      let z = () => {
        let a = 3;
        console.log(a);
      };
      z();
    };
    y();
  };
  x();
}

combinaionFunction();
