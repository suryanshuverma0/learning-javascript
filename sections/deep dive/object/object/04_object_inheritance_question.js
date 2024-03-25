 // Create a base object called Shape with properties width and height. Create another object called Rectangle that inherits from Shape and adds a method to calculate the area.
/*
// Parent constructor function
function Parent(name) {
  this.name = name;
}

// Adding a method to the Parent's prototype
Parent.prototype.greet = function () {
  console.log(`Hello, ${this.name}!`);
};

// Child constructor function inheriting from Parent
function Child(name, age) {
  // Call the Parent constructor to initialize the inherited properties
  Parent.call(this, name);
  this.age = age;
}

// Set the Child's prototype to a new instance of Parent
Child.prototype = Object.create(Parent.prototype);

// Reset the constructor property to Child
Child.prototype.constructor = Child;

// Adding a method to the Child's prototype
Child.prototype.introduce = function () {
  console.log(`I'm ${this.name} and I'm ${this.age} years old.`);
};

// Creating an instance of Child
const myChild = new Child("Alice", 5);

// Accessing properties and methods
myChild.greet();      // Inherited from Parent
myChild.introduce();  // Own method of Child

*/
function Shape(width, height) {
  this.width = width;
  this.height = height;
}

Shape.prototype.findAreaRect = function () {
  return this.width * this.height;
};

Shape.prototype.findAreaCircle = function () {
  return Math.PI * this.width * this.width;
};
//Rectangle
function Rectangle(width, height) {
  Shape.call(this, width, height);
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;

const newRectangle = new Rectangle(5, 6);
console.log(newRectangle.findAreaRect());

//Circle
function Circle(width) {
  return Shape.call(this, width);
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.constructor = Circle;

const newCircle = new Circle(7);
console.log(newCircle.findAreaCircle());


