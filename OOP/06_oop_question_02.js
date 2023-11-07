// Create a JavaScript class "Student" with properties for name and an array of grades. Add a method to calculate the average grade. Create a "Student" object and calculate and display the average grade.

class Student {
  constructor(name) {
    this.name = name;
    this.grades = [];
  }

  addGraade(grade) {
    return this.grades.push(grade);
  }

  findAverage() {
    if (this.grades.length === 0) {
      return "no grade aviliable";
    } else {
      const sum = this.grades.reduce((total, grade) => {
        return total + grade;
      }, 0);
      return sum / this.grades.length;
    }
  }
}

const student1 = new Student("Suryanshu");
student1.addGraade(56);
student1.addGraade(98);
student1.addGraade(67);

const average = student1.findAverage();
console.log(average);
