// class Student {
//          constructor(name, age) {
//            let _name = name; // Private variable
//            let _age = age; // Private variable

//            this.getName = () => {
//              return _name;
//            };

//            this.getAge = () => {
//              return _age;
//            };

//            this.setName = (newName) => {
//              _name = newName;
//            };

//            this.setAge = (newAge) => {
//              _age = newAge;
//            };
//          }

//          introduce() {
//            console.log(`Hi, I am ${this.getName()} and I am ${this.getAge()} years old`);
//          }
//        }

//        const Student1 = new Student("Suryanshu", 20);
//        Student1.introduce();

//the above approach is indeed correct but not genrerally recommended.

class Student {
  constructor(name, age) {
    this._name = name; // Private variable
    this._age = age; // Private variable
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    this._name = newName;
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(newAge) {
    this._age = newAge;
  }

  introduce() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  }
}

const Student1 = new Student("Suryanshu", 20);
Student1.introduce();
