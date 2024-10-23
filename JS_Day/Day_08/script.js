// Tasks/Activities:
// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age and log the string to the console., 
let personName="Rahul";
let personAge=25;
console.log(`"${personName}" is "${personAge}" years old`)
console.log("Task 1 Completed\n")

// Task 2: Create a multi-line string using template literals and log it to the console.
let mulString=`Hello world !
this is a
multiline string`;
console.log(mulString);
console.log("Task 2 Completed\n")

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let [firstElem, secondElem]=[34,56,76,32,50, 89];
console.log("Destructuring first and second element form array:-",firstElem,secondElem)
console.log("Task 3 Completed\n")

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book={
    title:"The Dust and Snow",
    author:"Robert Frost",
    year:1992
}
const { title,author}=book;
console.log("The title and author of Book is:-",title ,"and" ,author);
console.log("Task 4 Completed\n")

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let element=[23,54,56,76,78,98,90];
let newElem=[999,453,567,...element];
console.log(newElem)
console.log("Task 5 Completed\n")

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...rest){
    return rest.reduce((acc,val)=> acc+val,0);
}
console.log("Sum is",sum(67,43,999,33))
console.log("Task 6 Completed\n")

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function productNum(a,b=1){
console.log(a*b);
}
productNum(53);
console.log("Task 7 Completed\n")

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let user="Arjun";
let age=26;
let data={
    user,
    age,
    greet:()=>{
        return(`Hello, my name is ${user} and I am ${age} years old.`);
    }
}
console.log(data);
console.log(data.greet());
console.log("Task 8 Completed\n")

// Task 9: Create an object with computed property names based on variables and log the object to the console.
let userName="Rakesh";
let ageUser=22;
let role="Admin"

const userData={
    userName,ageUser,role
}
console.log(userData)
console.log(Object.values(userData))
console.log("Task 9 Completed\n")

// Feature Request:
// Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
let fetureString=`Example of 
template literals using multiline
string`;
console.log(fetureString)
console.log("Feature Request 1 Completed\n")

// Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
let [a,b]=[23,20,89,266,66];
let {name,position}={
    name:"Reena",
    position:"Admin"
}
console.log(`Hello "${name}" your position is "${position}" and you are" ${b}" years old`)
console.log("Feature Request 2 Completed\n")

// Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
const arr1=[1,23,42,21,12,98];
const arr2=[13,24,46,27,1211,908];
const combinedArr=[...arr1,...arr2];
console.log("Combined Array",combinedArr)

function productRest(...rest){
    return rest.reduce((acc,val)=> acc*val)
};
console.log(productRest(89,77,45));
console.log("Feature Request 3 Completed\n")

// Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
function greeting(name="Guest", msg=" Good Moarning"){
    console.log(name + msg)
}
greeting("Rahul")
greeting()
greeting(undefined, ' Welcome');
console.log("Feature Request 4 Completed\n")

// Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names

const firstName = 'John';
const lastName = 'Doe';
const dynamicKey = 'age';

const person = {
    firstName,
    lastName,

   
    [dynamicKey]: 30,

   
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    describe() {
        return `${this.getFullName()} is ${this[dynamicKey]} years old.`;
    }
};
console.log(person);
console.log(person.getFullName()); 
console.log(person.describe());
console.log("Feature Request 5 Completed\n")