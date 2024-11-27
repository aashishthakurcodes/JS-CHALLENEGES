// ### Activity 1: Basic Recursion

// - **Task 1**: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
console.log("Task 1")
function factorial(n){
if(n===1){
    return 1;
}
let fact=n*factorial(n-1)  //Factorial function call it itself until it goes to 1
return fact;
}

console.log(factorial(5))
console.log(factorial(2))
console.log(factorial(7))

// - **Task 2**: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

console.log("Task 2 ")

function fibonacci(n){
    if(n<=1){
        return n;
    }
  return fibonacci(n-2)+fibonacci(n-1)
}
console.log(fibonacci(10))
console.log(fibonacci(7))
console.log(fibonacci(9))