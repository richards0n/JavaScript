//  Obj Data Types
const obj = {};
obj.color="yellow";
console.log ("obj.color= ", obj.color);
obj["not an identifier"]=3;
console.log ("obj[not an identifier]= ", obj["not an identifier"]);
const SIZE = Symbol();
obj[SIZE]=8;    
console.log ("obj[SIZE]= ", obj[SIZE]);

const sam1 = {
                name: 'Sam', 
                age: 4
            };

const sam2 = {name: 'Sam', age: 4};

const sam3 = {
                name: 'Sam', 
                classification: {
                                    kingdom: 'Anamalia',
                                    phylum: 'Chordata',
                                    class: 'Mamalia',
                                    order: 'Carnivoria',
                                    family: 'Felidae',
                                    subfamily: 'Felinae',
                                    genus: 'Felis',
                                    species: 'Catus',
                },
            };

console.log ("sam1.name: ", sam1.name, " sam1.age: ", sam1.age);
console.log ("sam2.name: ", sam2.name, " sam2.age: ", sam2.age);
console.log ("sam3.name: ", sam3.name, 
             "\nsam3.classificatioin.kingdom ", sam3.classification.kingdom,
             "\nsam3.classificatioin.phylum ", sam3.classification.phylum,
             "\nsam3.classificatioin.class ", sam3.classification.class,
             "\nsam3.classificatioin.order ", sam3.classification.order,
             "\nsam3.classificatioin.family ", sam3.classification.family,
             "\nsam3.classificatioin.subfamily ", sam3.classification.subfamily,
             "\nsam3.classificatioin.genus ", sam3.classification.genus,
             "\nsam3.classificatioin.species ", sam3.classification.species);
             
             

