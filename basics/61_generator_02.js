function* countdown() {
         yield 3;
         yield 2;
         yield 1;
         yield 'Lift-off!';
       }
       
       const countdownGenerator = countdown();
       
       console.log(countdownGenerator.next().value); // 3
       console.log(countdownGenerator.next().value); // 2
       // ... pausing and resuming ...
       console.log(countdownGenerator.next().value); // 1
       console.log(countdownGenerator.next().value); // Lift-off!
       console.log(countdownGenerator.next().value); // undefined
       