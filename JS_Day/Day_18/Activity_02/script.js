// ### Activity 2: Searching Algorithms

// - **Task 4:** Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

console.log("Task 4")

function linearSearch(arr, target) {

    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        
        // if the current element is equal to the target value
        if (arr[i] === target) {
            // return the index of the target value
            return i;
        }
    }

    // if the target value is not found, return -1
    return -1;
}

// create an array of integers
let arr = [64, 34, 25, 12, 22, 11, 90];

// define the target value to search for in the array
let target = 22;

// call the linearSearch function to find the target value in the array
let index = linearSearch(arr, target);

// log the index of the target value 
if (index !== -1) {
    console.log(`The target value ${target} is found at index ${index}.`);
} else {
    console.log(`The target value ${target} is not found in the array.`);
}

// - **Task 5:** Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

console.log("Task 5")

function binarySearch(arr2, target2) {
    // Define the left and right pointers 
    let left = 0;
    let right = arr2.length - 1;
    
    // Loop through the array while the left pointer is less than or equal to the right pointer
    while (left <= right) {
        // Calculate the middle index of the array
        let mid = Math.floor((left + right) / 2);
        
        // Check if the middle element is equal to the target value, return the index
        if (arr2[mid] === target2) {
            return mid;
        } else if (arr2[mid] < target2) { // If the middle element is less than the target value, update the left pointer
            left = mid + 1;
        } else { // If the middle element is greater than the target value, update the right pointer
            right = mid - 1;
        }
    }
    
    return -1;
}

// Create a sorted array of integers
let arr2 = [11, 12, 22, 25, 34, 64, 90];

// Define the target value to search for in the array
let target2 = 90;

// Call the binarySearch function to find the target value in the array
let indexStart = binarySearch(arr2, target2);

// Log the index of the target value
if (indexStart !== -1) {
    console.log(`The target value ${target2} is found at index ${indexStart}.`);
} else {
    console.log(`The target value ${target2} is not found in the array.`);
}