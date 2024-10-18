// Day 3: Control Structures

//Activity 1
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 97;
if (num > 0) {
    console.log(" Positive Number")
}
else if (num == 0) {
    console.log("Number is Zero")
}
else {
    console.log(" Negative Number")
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 23;
if (age >= 18) {
    console.log("You are eligible to vote")
}
else {
    console.log("Sorry! You are not eligible to vote")
}

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let val1 = 721;
let val2 = 409;
let val3 = 987;

if (val1 > val2 && val1 > val3) {
    console.log("The Largest Number is:-", val1)
}
else if (val2 > val3 && val2 > val1) {
    console.log("The Largest Number is:-", val2)
} else {
    console.log("Largest Number is:-", val3)
}

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 4;
switch (day) {
    case 1: console.log("Monday");
        break;
    case 2: console.log("Tuesday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thrusday");
        break;
    case 5: console.log("Friday");
        break;
    case 6: console.log("Saturday");
        break;
    case 7: console.log("Sunday");
        break;
    default: console.log("Wrong Input Please give the value between 1 to 7")

}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'E') based on a score and log the grade to the console.

let score = 12;
// switch(true) to allow conditions within the switch cases
switch (true) {
    case score >= 80: console.log("Congrats you got A grade ");
        break;
    case score >= 60: console.log("You got B grade ");
        break;
    case score >= 40: console.log("You got C grade ");
        break;
    case score >= 20: console.log("You got D grade ");
        break;
    case score >= 0: console.log("You got E  grade ");
        break;
    default: console.log("Wrong input of Score, Score should between 0 to 100")
}

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let number = 887;
console.log(number % 2 == 0 ? "Even Number" : "Odd Number")

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 1800;
if (year % 400 == 0) {
    console.log("Leap year")
}
else if (year % 100 == 0) {
    console.log("Not a leap year")
}
else if (year % 4 == 0) {
    console.log("its also leap year")
}
else {
    console.log("Not a leap year")
}


