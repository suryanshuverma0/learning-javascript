class Shape {
  constructor(color) {
    this.color = color;
  }
}
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
}

const redCircle = new Circle("Red", 5);
console.log(`A red circle with radius ${redCircle.radius}`);
