//In JavaScript, you can use the static keyword to define static methods and properties within a class. Static members are associated with the class itself, rather than with instances of the class. This means that you can access static members without creating an instance of the class.

class MyClass {
  static staticMethod() {
    console.log("This is a static method.");
  }

  regularMethod() {
    console.log("This is a regular method.");
  }
}

MyClass.staticMethod(); // Call the static method directly
const instance = new MyClass();
instance.regularMethod(); // Call the regular method on an instance
