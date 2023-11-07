class Animal {
         makeSound() {
           return "Some generic sound";
         }
       }
       
       class Dog extends Animal {
         makeSound() {
           return "Bark";
         }
       }
       
       class Cat extends Animal {
         makeSound() {
           return "Meow";
         }
       }
       
       const animals = [new Dog(), new Cat()];
       
       animals.forEach(animal => {
         console.log(animal.makeSound()); // Different results based on the actual object type
       });
       