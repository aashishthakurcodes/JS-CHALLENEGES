// ### Activity 1: Understanding Closures
// - **Task 1**: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
console.log("Task 1");

function outerFunction(){
    let name="Rahul";
    return function(){
        return `Accessing Parent Function Property "${name}"`
       
    }
}
let data=outerFunction();
console.log(data())


// - **Task 2**: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
console.log("Task 2");

function counter(){

    let count=0;

   function increment(){
    count++;
   }
   
   function getValue(){
    return count;
   }

   return{ increment,getValue}
}

const result=counter();
result.increment()
result.increment()
result.increment()


console.log(result.getValue())