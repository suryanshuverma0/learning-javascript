const company = {
  sales: [
    {
      name: "John",
      salary: 10,
    },
    {
      name: "Roman",
      salary: 18,
    },
  ],

  development: {
    sites: [
      {
        name: "Random",
        salary: 30,
      },
      {
        name: "Ronaldo",
        salary: 50,
      },
    ],
    internal: [
      {
        name: "Ram",
        salary: 75,
      },
      {
        name: "Bravo",
        salary: 5,
      },
    ],
  },
};

function calculateSalary(department) {
  if (Array.isArray(department)) {
    return department.reduce((previous, current) => {
      return previous + current.salary;
    }, 0);
  } else {
    let sum = 0;
    for (let sub of Object.values(department)) {
      sum = sum + calculateSalary(sub);
    }
    return sum;
  }
}

console.log(calculateSalary(company));

//This is one of the most important concept to understand and has real world implementation lile adding list of the products 
