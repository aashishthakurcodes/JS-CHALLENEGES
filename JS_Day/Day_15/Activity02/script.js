// ### Activity 2: Practical Closures
// - **Task 3**: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function uniqueID(){
    let id=Date.now();
    //The generated Id
    console.log("The generated Id",id);

    
    function increment(){
     "Id after updation", id++;
    }
    function tracking(){
      return `Current Id ${id}`;
    }
    return{
        increment,tracking
    }
}
let result=uniqueID()

result.increment();// For increment the id
console.log(result.tracking())

// - **Task 4**: Create a closure that captures a user's name and returns a function that greets the user by name.
function greets(name){

    return function (){
       console.log(`Hello ${name} How are you....`)
    }
    
}
let greeter=greets("Rahul");
greeter()