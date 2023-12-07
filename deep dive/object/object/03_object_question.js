//Create an object representing a dictionary with word definitions. Iterate over the object and print each word along with its definition.

const dictionary = {
         enjoyed : "get joy or pleasure from",
         wonderful : "very good or amazing",
         thinning : "making or becoming thin",
         delight : "very pleased",
         company: "a friend or friends",
};

for (const key in dictionary){
         console.log(key, dictionary[key]);
}