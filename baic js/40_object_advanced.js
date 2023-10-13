function marry(man , woman){
         woman.husband = man;
         man.wife = woman;

         return {
                  father : man,
                  mother : woman,
         };
}
let family = marry(
         {
                  name: 'John',
         },
         {
                  name: 'Eva',
         },
);
console.log(family);

// until here both man woman object are reachable 
delete family.father;
delete family.mother.husband;

//after using delete the man object becomes unreachable

console.log(family);