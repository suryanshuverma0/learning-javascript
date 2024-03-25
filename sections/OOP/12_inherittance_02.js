class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  eat() {
    console.log(`${this.name} eats`);
  }
}

class Bird extends Animal {
  constructor(name, species, children) {
    super(name, species);
    this.children = children;
  }
  fly() {
    console.log(`${this.name} fly`);
  }
}

class Dog extends Animal {
  constructor(name, species, bread) {
    super(name, species);
    this.bread = bread;
  }
  eat() {
    super.eat();
    console.log(`${this.name} of ${this.bread} eat`);
  }
}

class Cat extends Animal {
  constructor(name, species, color) {
    super(name, species);
    this.color = color;
  }

  eat() {
    super.eat(); // Call the eat method from the superclass
    console.log(`The ${this.color} cat is eating.`);
  }
}

const blackCat = new Cat("Whiskers", "Cat", "Black");
blackCat.eat(); // Calls both superclass and subclass eat methods

const eagle = new Bird("Eagle", "Bird of Prey", 72);
eagle.eat();
eagle.fly();

const goldenRetriever = new Dog("Buddy", "Dog", "Golden Retriever");
goldenRetriever.eat();
