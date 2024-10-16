/*
Activity 1: Variable Declaration


Task 2: Declare a variable using `let, assign it a string, and log the value to the console.

*/

//Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var myNum = 908;
console.log("Value of my number", myNum)

//Task 2: Declare a variable using `let, assign it a string, and log the value to the console.
let myStr="Hello World";
console.log("Value of String:-", myStr)


// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const a=true;
console.log("Value :-",a)

// Task 4: Create variables of different data types and log each variable's type using the typeof operator.

let str="Hello World";
let num= 897;
let bol=true;
let obj={"name":"rahul","age":45,};
let ary=["ram","shyam","rahul","arun"]

console.log("DataType:",typeof(str))
console.log("DataType:",typeof(num))
console.log("DataType:",typeof(bol))
console.log("DataType:",typeof(obj))
console.log("DataType:",typeof(ary))

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let initialValue ="Stay positive";
console.log("Initial Value:-",initialValue);
 initialValue="Think Positive";
 console.log("After Reinitialising:-",initialValue);


// Task 6: Try reassigning a variable declared with const and observe the error.

const namVar="Rahul";
console.log("Initial value declared by const:-",namVar);
//The below code of two line give us error bcz we declared variable using const it can;t be reassigned;
// namVar="Suresh";
// console.log("RE-Initial value declared by const:-",namVar);



//Feature Rrquest 1
//Write a script that declares variables of different data types and logs both the value and type of each variable to the console.


let numb=543;
let strg="Hello Buddy";
let bool=true;
let objt={"key":"value"};
let objAry=[12,23,44]

console.log("Value:",numb,"DataType:",typeof(numb))
console.log("Value:",strg,"DataType:",typeof(strg))
console.log("Value:",bool,"DataType:",typeof(bool))
console.log("Value:",objt,"DataType:",typeof(objt))
console.log("Value:",objAry,"DataType:",typeof(objAry))



// Feature Request 2:
// Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

var intVal="Good Moarning";
console.log("Initial Value:-",intVal);
 intVal="Good Evening";
 console.log("After re-initializing value using var:-",intVal)


 let initialVal=7976;
console.log("Initial Value:-",initialVal);
 initialVal=3456
 console.log("After re-initializing value using let:-",initialVal)


 const user="Rahul";
console.log("Initial value declared by const:-",user);
//The above line of code give us error bcz we declared variable using const it can't be reassigned like var and let;
// user="Simran";
// console.log("RE-Initial value declared by const:-",user);



// Difference between let, const, Var
// 1. Scope
// var: Function-scoped or globally-scoped. If declared inside a function, it's only accessible within that function. If declared outside any function, it’s available globally.

// let: Block-scoped. It is only accessible within the nearest enclosing block (e.g., within {}).
// Inside a block: let is block-scoped and not accessible outside that block.
// Outside any function or block: let is globally scoped and can be accessed throughout the script.

// const: Also block-scoped, similar to let.

// 2. Reassignment
// var: Can be re-assigned and re-declared.
// let: Can be re-assigned but not re-declared in the same scope.


// const: Cannot be re-assigned or re-declared. However, if it holds an object or array, the contents of that object or array can still be modified.