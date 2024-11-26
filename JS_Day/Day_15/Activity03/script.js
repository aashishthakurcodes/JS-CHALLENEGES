// ### Activity 3: Closures in Loops
// - **Task 5**: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.


function createFuncArray() {

    let functions = [];
    for (let i = 0; i <= 5; i++) {
        // Create a function that logs the index
        functions.push(((index) => {
            // Return the function
            return function () {
                console.log(index);
            };
        })(i)); // Pass the index to the function
    }

    return functions;
}
let funcAry=createFuncArray();

// Call each function in the array
funcAry.forEach((func) => func());