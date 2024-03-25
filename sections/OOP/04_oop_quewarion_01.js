// Define a JavaScript class "Rectangle" with properties for width and height. Add a method to calculate its area. Create instances of the class and calculate and display their areas.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get width() {
    return this._width;
  }
  set width(w) {
    return (this._width = w);
  }
  get height() {
    return this._height;
  }
  set height(h) {
    return (this._height = h);
  }

  findArea() {
    return this._width * this._height;
  }
}

const Rectangle1 = new Rectangle(5, 6);
const area = Rectangle1.findArea();
console.log(area);
