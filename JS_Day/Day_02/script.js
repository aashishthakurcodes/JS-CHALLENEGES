// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.
let num1=987;
let num2=456;
console.log("Addition:-",num1+num2)

// Task 2: Write a program to subtract two numbers and log the result to the console.
let sub1=654320;
let sub2=345098;
console.log("Subtraction :-", sub1-sub2)

// Task 3: Write a program to multiply two numbers and log the result to the console.
let mul1=4302;
let mul2=4940;
console.log("Multiplication:-",mul1*mul2)

// Task 4: Write a program to divide two numbers and log the result to the console.
let div1=984626;
let div2=634;
console.log("Division:-",div1/div2);

// Task 5: Write a program to find the remainder when one number is divided by another and log the result
let number1=8650031;
let number2=5373;
console.log("Remainder:-",number1%number2)


// Activity 2: Assignment Operators
// Task 6: Use the += operator to add a number to a variable and log the result to the console.
// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
// Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let val1=5673;
val1+=7839;
console.log("Addition using += operator",val1)

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let val2=974675;
val2-=78730;
console.log("Subtraction using -= operator",val2)

// Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let val3=579886;
let val4=987665;
console.log(`Is ${val3} is > ${val4}`, val3>val4)

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
let num3=78537;
let num4=9838;
console.log(`Is ${num3} is > ${num4}`, num3>=num4)
console.log(`Is ${num3} is > ${num4}`, num3<=num4)

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let a=7896;
let b=6536;
console.log(`Is ${a} == ${b}`, a==b)

let str1="Rahul";  
let str2="Rahul";
console.log(`Is ${str1} === ${str2}`, str1===str2)
// In === value, datatype should be same

// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

// &&LOGICAL AND OPERATOR
let value=678;
if(value>=0 && value%2==0){
    console.log("Even Number")
}
else{
    console.log("Not even number")
}
// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
// ||LOGICAL OR OPERATOR
let x=30;
let y=23;
console.log(x==40 || y>30)



// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
// !Logical Not
let atr1=34
let atr2=55;
console.log(!(atr2>atr1));

// Activity 5: Ternary Operator
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
//Condition ? Value if true : Value if False
let atr3=735;
console.log((20>98 ?"Yes":"No"))

// Feature Request:
// Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

let nm1=458759;
let nm2=3485;

console.log(`Addition of ${nm1} and ${nm2}`, nm1+nm2);
console.log(`Subtraction of ${nm1} and ${nm2}`, nm1-nm2);
console.log(`Multiplication of ${nm1} and ${nm2}`, nm1*nm2);
console.log(`Division of ${nm1} and ${nm2}`, nm1/nm2);
console.log(`Remainder of ${nm1} and ${nm2}`, nm1%nm2);

// Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
let value1=30;
let value2=56;
console.log(`Is ${value1} > than ${value2}`, value1>value2)
console.log(`Is ${value1} < than ${value2}`, value1>value2)
console.log(`Is ${value1} >= than ${value2}`, value1>=value2)
console.log(`Is ${value1} <= than ${value2}`, value1<=value2)
console.log(`Is ${value1} == than ${value2}`, value1==value2)
console.log(`Is ${value1} === than ${value2}`, value1===value2)


console.log(value1>=30 && value2<100)
console.log(value1>30 || value2<100)


// Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

let givenNumber=-78
console.log((givenNumber>=0?"Positive Number":"Negative Number"))