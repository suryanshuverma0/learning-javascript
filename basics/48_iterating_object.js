const population = {
         "male": 4, 
         "felale" : 5,
         "other": 3,
}

for(const key in population){
         console.log(`${key} : ${population[key]}`);
}

const fruitBasket = {
         "apple" : 5,
         "banana" : 6,
         "pineapple" : 7,
         "orange" : 8,
         "mango" : 9,
}

// for(const fruit in fruitBasket){
//          console.log(`${fruit} : ${fruitBasket[fruit]}`);
// }


//modern es6 methods for iterationg over the object
//usint Object.keys() method
const gender = Object.keys(population);
console.log(gender);

//adding the population 
let totalPopulation = 0;

gender.forEach((gender) =>{
         totalPopulation = totalPopulation + population[gender];
})

console.log(totalPopulation);


//using Object.values() method for iteration
const gend = Object.values(population);
let populationTotal = 0;

gend.forEach((gendValue) =>{
         populationTotal = populationTotal + gendValue;
});

console.log(populationTotal);



