// ### Activity 2: Named and Default Exports
// - **Task 3**: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

const {add,sub,mul,div}=require("./module");


const num1=54;
const num2=88;

console.log(add(num1,num2))
console.log(sub(num1,num2))
console.log(mul(num1,num2))
console.log(div(num1,num2))




// - **Task 4**: Create a module that exports a single function using default export. Import and use this function in another script.
const { greeting } = require('./module');
console.log(greeting("Aashish"))