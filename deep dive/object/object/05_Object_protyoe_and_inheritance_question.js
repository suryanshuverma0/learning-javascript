// You are working on a project that involves creating a simple hierarchy of shapes. There is a base object called Shape with a property color and a method getColor(). You need to create a Circle object that inherits from Shape and has an additional property radius and a method getArea() to calculate the area of the circle.

// Your task is to implement the Circle constructor function and ensure proper inheritance from the Shape object. Additionally, override the getColor() method in the Circle prototype to return the color followed by " Circle."

// Base object - Shape
function Shape(color) {
  this.color = color;
}

// Method to get the color from Shape's prototype
Shape.prototype.getColor = function () {
  return this.color;
};

// Your task: Implement the Circle constructor function and ensure proper inheritance

// Circle constructor function
function Circle(color, radius) {
  // Your code here
  Shape.call(this, color);
  this.radius = radius;
}

// Your code here: Set up inheritance for Circle from Shape
Circle.prototype = Object.create(Shape.prototype);

// Your code here: Override the getColor() method for Circle

Circle.prototype.getColor = function () {
  return this.color +" Circle";
};

// Your code here: Add a method getArea() to the Circle prototype to calculate the area

Circle.prototype.getArea = function () {
  return Math.PI * this.radius * this.radius;
};

// Example usage
const myCircle = new Circle("blue", 5);
console.log(myCircle.getColor()); // Should print "blue Circle"
console.log(myCircle.getArea()); // Should print the calculated area of the circle
