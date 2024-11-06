// ### Activity 1: Creating and Exporting Modules
// - **Task 1**: Create a module that exports a function to add two numbers. Import and use this module in another script.

//Importing the modules
const {addTwoNumbers,subtractNumbers}=require('./utilModule')

console.log(subtractNumbers(78,34))
console.log(addTwoNumbers(78,34))


// - **Task 2**: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

const {person}=require("./utilModule");
console.log(person);
console.log(person.greet());

