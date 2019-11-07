// const and let are used to declare variables
// const is used when you don't want to variable reference to change
// let is used when the value of a variable will be reassigned or change
const animals = ["aardvark", "bear", "cat", "cow", "dog", "fish", "turtle"]

// map and forEach are a way to loop through arrays
// .map creates a new list while keeping the original list the same
// .forEach does an opperation on the data in the original list
animals.map(function(animal){
    console.log(animal)
})

// arrow function is like using shorthand
animals.forEach(animal =>{
    if(animal.length > 3) {
        console.log("Long name");
    }
    else{console.log("short name")}
})

// filter only returns the selected values often used in a function for a return statement
console.log(animals.filter(animal => animal.length > 3));

// spread opperator spreads out the values of an array
const moreAnimals = [...animals, "shark", "whale", "chicken"]

// it can be used in functions
const logAnimals = function(...animals){
    for(let animal of animals) console.log(animal)
}

logAnimals(...moreAnimals);