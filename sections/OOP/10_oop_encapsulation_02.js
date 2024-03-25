class Student {
  constructor(name, age) {
    let _name = name; // Private variable
    let _age = age; // Private variable

    // Getter methods to access private variables
    this.getName = () => {
      return _name;
    };

    this.getAge = () => {
      return _age;
    };

    // Setter methods to modify private variables
    this.setName = (newName) => {
      _name = newName;
    };

    this.setAge = (newAge) => {
      _age = newAge;
    };
  }

  // Public method
  introduce() {
    console.log(
      `My name is ${this.getName()} and I'm ${this.getAge()} years old.`
    );
  }
}

const student1 = new Student("Alice", 20);
student1.introduce();

// Attempt to access private variables directly (results in undefined)
console.log(student1._name);
console.log(student1._age);

// Use getter and setter methods to modify private variables
student1.setName("Bob");
student1.setAge(22);
student1.introduce();
