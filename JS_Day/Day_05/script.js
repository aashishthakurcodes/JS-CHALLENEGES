// Activity 1: Function Declaration
// Task 1: Check if a number is even or odd.
function isEvenorOdd(val) {
    if (val % 2 == 0) {
        console.log("Given number is Even", val);
    }
    else {
        console.log("Given number is Odd")
    }
}
isEvenorOdd(79)

// Task 2: Calculate the square of a number.
function square(num) {
    console.log("Square of given number is", num * num)
}
square(25);

// Activity 2: Function Expression

// Task 3: Find the maximum of two numbers.

function findMaximum(num1, num2) {
    if (num1 === num2) {
        console.log(`${num1} and ${num2} both are Equal`)
    }
    else if (num1 > num2) {
        console.log(`${num1} is greater than ${num2} `)
    }
    else {
        console.log(`${num2} is greater than ${num1} `)
    }

}

findMaximum(56, 86);

// Task 4: Concatenate two strings.
let str1 = "Hello ";
let str2 = "World";
console.log(str1 + str2)

// Activity 3: Arrow Functions

// Task 5: Sum of two numbers.
const sum = (a, b) => {
    return a + b;
}
console.log(sum(76, 98))

// Task 6: Check if a string contains a specific character.

let str = "Hello world";
let strHas = str.includes("o");
function stringValue(strHas) {

    if (strHas === true) {
        console.log("String contains the specific character ")
    }
    else {
        console.log("String doesn't contain the specific character of the given string")
    }
}

stringValue(strHas);

// Activity 4: Function Parameters and Default Values

// Task 7: Product of two numbers with a default value.
const sumOfNum = (val1, val2 = 89) => {
    return val1 * val2;
}
console.log(sumOfNum(7));

// Task 8: Greeting message with name and age.
function greetMsg(name, age = 21) {
    console.log(`Hello ${name}, You are ${age} old`)
}
greetMsg("aashish");

// Activity 5: Higher-Order Functions

// Task 9: Function that calls another function multiple times.

function greet() {
    console.log("Hello World")
}

function callMutiple(func, times) {
    for (let i = 1; i <= times; i++) {
        func();
    }
}

callMutiple(greet, 4)

// Task 10: Apply two functions sequentially to a value.\\

function squareNum(num) {
    return num * num;
}

function double(num) {
    return num * 2
}

function applySequentially(value) {
    let res = squareNum(value);
    res = double(res);
    return res;
}

// 5*5 =25*2=50
console.log(applySequentially(4))

// Feature Request

// Even or Odd Function Script: Check if a number is even or odd.
function evenOdd(num) {
    return num % 2 == 0 ? "Even Number" : "Odd Number"
}

console.log(evenOdd(58))

// Square Calculation Function Script: Calculate the square of a number.
function squareCalc(num) {
    return num * num;
}
console.log(squareCalc(5))

// Concatenation Function Script: Concatenate two strings.
function conCat(str1, str2) {
    return str1 + str2;
}
console.log(conCat("Hello ", "World "))

// Sum Calculation Arrow Function Script: Sum of two numbers.
const sumCalc = (num1, num2) => {
    return num1 + num2;
}
console.log(sumCalc(78, 32))

// Higher-Order Function Script: Apply a function multiple times.
function msg() {
    console.log("Welcome to Chai or code")
}

function msgCaller(func, times) {
    for (let i = 1; i <= times; i++) {
        func()
    }
}

msgCaller(msg, 5)