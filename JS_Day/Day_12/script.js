// ### Activity 1: Basic Error Handling with Try-Catch
// - **Task 1**: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwEror() {
    throw new Error("An Error Occurred")
}

try {
    throwError();
} catch (error) {
    console.log(error.message)
}

// - **Task 2**: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divideZero(num, den) {
    if(den==0){
        throw new Error("Denominator Should not be zero")
    }
    return num/den;
}

try {
    let res=divideZero(78,8);
    console.log("Answer is",res)
} catch (error) {
    console.log(error.message)
}


// ### Activity 2: Finally Block
// - **Task 3**: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

try {
    console.log("Starting try block Statment");
    throw new Error("An Error Occured in Try Block")
} catch (error) {
    console.log("Error handling in Catch Block",error.message)
} finally{
    console.log("It Executes everytime wheather we got the error or not")
}

// ### Activity 3: Custom Error Objects
// - **Task 4**: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class ValidationError extends Error{
    constructor(name,msg){
      super(name,msg);
      this.name="Custom Error";
      this.message="Custom Error Message";
    }
}
function throwCustomError(){
    throw new ValidationError
}

try {
   throwCustomError();
} catch (error) {
    console.log(error.message)
    console.log(error.name)
}

// - **Task 5**: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class InputValidation extends Error{
    constructor(msg){
        super(msg);
       this.name="Input Validation Error";
    }
}
 
function  validateInput(input){
    if(input ==""){
        throw new InputValidation("String Should not be Empty")
    }
    return "String is not Empty";
}

try {
    console.log(validateInput("ddd"));

} catch (error) {
    console.log(error.message)
    console.log(error.name)
}

// ### Activity 4: Error Handling in Promises
// - **Task 6**: Create a promise that randomly resolves or rejects. Use `.catch()` to handle the rejection and log an appropriate message to the console.

function resolvepromise(){
    return new Promise((res,rej)=>{
        const randomValue=Math.random();
        console.log("Random value is:- ",randomValue)
        if(randomValue>0.9){
            res("Promise Resolved")
        }
        else{
            rej("Promise rejected")
        }
    })
}

resolvepromise().catch((err)=>console.log("Promise Error",err))

// - **Task 7**: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

function promiseRes(){
    return new Promise((res,rej)=>{
        const randomValue=Math.random();
        console.log(randomValue);
        if(randomValue>0.5){
            res("Promise Resolved")
        }
        else{
            rej("Promise Rejected")
        }
    })
}

async function handlePromiseError() {
    try {
        const result=await promiseRes();
        console.log("Result",result)
    } catch (error) {
        console.log("Result",error)
    }
}

handlePromiseError();



// ### Activity 5: Graceful Error Handling in Fetch
// - **Task 8**: Use the `fetch` API to request data from an invalid URL and handle the error using `.catch()`. Log an appropriate error message to the console.
function fetchData() {
    fetch("https://dummyjson.com/sers") // Example of an invalid URL
        .then(response => {
           
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); 
        })
        .then(data => {
            console.log("Data fetched successfully:", data);
        })
        .catch(error => {
            console.log("Error fetching data:", error.message);
        });
}


fetchData();

// - **Task 9**: Use the `fetch` API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function asyncFetching() {
     try {
        const result= await fetch("https://dummyson.com/users");
        if(!result.ok){
            throw new Error(`HTTP error! Status: ${result.status}`)
        }
        const data = await result.json(); 
        console.log("Data fetched successfully:", data); 
     } catch (error) {
        console.log("Error fetching data:", error.name);
     }
}

asyncFetching()

