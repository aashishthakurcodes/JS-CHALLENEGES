// ### Activity 1: Sorting Algorithms
// - **Task 1:** Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.


// Function to implement the bubble sort algorithm

console.log("Task 1")

function bubbleSort(arr) {
    // Get the length of the array
    let arrayLength = arr.length;
  
    // Loop through the array
    for (let i = 0; i < arrayLength - 1; i++) {
  
      // Loop through the array again to compare adjacent elements
      for (let j = 0; j < arrayLength - i - 1; j++) {
          
        // If the current element is greater than the next element, swap them
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  // Create an array of integers to be sorted
  let arr1 = [64, 34, 25, 12, 22, 11, 90];
  
  // Print the original array
  console.log("Original array:", arr1);
  
  // Call the bubbleSort function to sort the array
  bubbleSort(arr1);
  
  // Print the sorted array
  console.log("Sorted array:", arr1);


// - **Task 2:** Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.


// Function to implement the selection sort algorithm
console.log("Task 2")

function selectionSort(arr) {
    // Get the length of the array
    let arrayLength = arr.length;

    // Loop through the array
    for (let i = 0; i < arrayLength - 1; i++) {
        // Assume the current element is the minimum
        let minIndex = i;

        // Loop through the remaining elements to find the actual minimum
        for (let j = i + 1; j < arrayLength; j++) {
            
            // If the current element is less than the current minimum, update minIndex
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // If minIndex is not the same as the initial index, swap the elements
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}

// Create an array of integers to be sorted
let arr = [64, 34, 25, 12, 22, 11, 90];

// Print the original array
console.log("Original array:", arr);

// Call the selectionSort function to sort the array
selectionSort(arr);

// Print the sorted array
console.log("Sorted array:", arr);

// - **Task 3:** Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

// Function to implement the quicksort algorithm
console.log("Task 3")

function quickSort(arr, left, right) {
    // If the left index is less than the right index
    if (left < right) {
      // Partition the array
      let partitionIndex = partition(arr, left, right);
  
      // Recursively call quickSort on the left and right subarrays
      quickSort(arr, left, partitionIndex - 1);
      quickSort(arr, partitionIndex + 1, right);
    }
  }
  
  // Function to partition the array
  function partition(arr2, left, right) {
    // Choose the rightmost element as the pivot
    let pivot = arr2[right];
    let i = left - 1;
  
    // Loop through the array
    for (let j = left; j < right; j++) {
      // If the current element is less than the pivot
      if (arr2[j] < pivot) {
        i++;
  
        // Swap the elements at i and j
        let temp = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = temp;
      }
    }
  
    // Swap the elements at i+1 and the pivot
    let temp = arr2[i + 1];
    arr2[i + 1] = arr2[right];
    arr2[right] = temp;
  
    // Return the partition index
    return i + 1;
  }
  
  // Create an arr2ay of integers to be sorted
  let arr2 = [64, 34, 25, 12, 22, 11, 90];
  
  // Print the original arr2ay
  console.log("Original arr2ay:", arr2);
  
  // Call the quickSort function to sort the arr2ay
  quickSort(arr2, 0, arr2.length - 1);
  
  // Print the sorted arr2ay
  console.log("Sorted array:", arr2);