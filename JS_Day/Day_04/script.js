// Tasks/Activities:
// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
// Task 2: Write a program to print the multiplication table of 5 using a for loop.
let table = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${table} * ${i} =`, table * i)
}

// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let number=1;
let sum=0;
while(number<=10){
    sum=sum+number;
    number++;
}
console.log(sum)

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let i=10;
while(i>=1){
    console.log(i);
    --i
}

console.log("Activity 3 starts here")

// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let num=1
do{
    console.log(num);
    num++;
}
while(num<=5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let factorial=10;
let ans=1;
do{
    ans=ans*factorial;
    factorial--;
}
while(factorial>=1);
console.log(ans)

// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loops:
// *
// * *
// * * *
// * * * *
// * * * * *

let row=5;
let pattern="";
for (let n=1; n<=row; n++){
    for (let num = 1; num <= n; num++) {
        pattern += "*"
     }
     pattern += "\n";
    
}
console.log(pattern)

// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for(let i=1;i<=10;i++){
    if(i==+5){
        continue;
    }
    console.log(i)
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i=1;i<=10;i++){
    if(i===7){
        break;
    }
    console.log(i)
}

console.log("Feature Request Questions")


// Feature Request:

// Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
for(let i=1;i<=10;i++){
    console.log(i)
}

let val=1;
while(val<=10){
    console.log(val);
    val++;
}

// Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
let mulTable=5;
for(let i=1;i<=10;i++){
    console.log(`${mulTable}*${i} = `, mulTable*i);
}
// Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
let numberRows=5;
let starPattern="";
for(let n=1;n<=numberRows;n++){
    for(let j=1;j<=n;j++){
        starPattern += "*"
    }
    starPattern += "\n"
}
console.log(starPattern)

// Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
let initialVal=1;
let total=0;
while(initialVal<=10){
    total=total+initialVal;
    initialVal++;
}
console.log(total)

// Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop
let calFact=5;
let ansfact=1;
do{
   
    ansfact=ansfact*calFact;
    calFact--;
}
while(calFact>=1)
    console.log(ansfact)