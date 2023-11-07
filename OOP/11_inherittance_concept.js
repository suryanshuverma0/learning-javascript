class Vechiles {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }

  introduce() {
    console.log(`My car brand is ${this.name} and brand is ${this.brand}`);
  }
}

class Car extends Vechiles {
  constructor(name, brand, model) {
    super(name, brand);
    this.model = model;
  }

  show() {
    this.introduce();
    console.log(` my model is ${this.model}`);
  }
}

const car1 = new Car("Car", "Ferrari", 699);
car1.show();
