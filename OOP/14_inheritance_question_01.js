// Create a set of classes to model geometric shapes. Start with a base class Shape and create subclasses for specific shapes, such as Circle and Rectangle. Each shape should have methods to calculate its area and perimeter. Ensure that the subclasses inherit from the Shape class and provide their own implementations of these methods.

class Shape {
  constructor() {}

  getArea() {
    return 0;
  }

  getPerimeter() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle(7);
const rectangle = new Rectangle(4, 6);

console.log(
  `Circle - Area: ${circle.getArea().toFixed(2)}, Perimeter: ${circle
    .getPerimeter()
    .toFixed(2)}`
);
console.log(
  `Rectangle - Area: ${rectangle.getArea()}, Perimeter: ${rectangle.getPerimeter()}`
);
