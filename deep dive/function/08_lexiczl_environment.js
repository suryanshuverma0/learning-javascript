function parent() {
  let a = 12;
  function child() {
    let b = 12;

    function anotherChild() {
      console.log(b);

      function grandChild() {
        console.log(a);
      }
      grandChild();
    }
    anotherChild();
  }
  child();
}

parent();
