// ### Activity 3: Importing Entire Modules
// - **Task 5**: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

//Importing the Module file
const utils=require('./module');

 console.log(utils.PI)
 console.log(utils.getArea(4))
 console.log(utils.userName)
 console.log(utils.greet("Harry"))