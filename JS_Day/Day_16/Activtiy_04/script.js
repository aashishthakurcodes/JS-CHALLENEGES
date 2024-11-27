// ### Activity 4: Recursive Search

// - **Task 7**: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
console.log('Task 7')
function binarySearch(arr,target,low = 0,high = arr.length-1){
    //if range is invalid
if(low > high){
    return -1
}
//calculate the middle index
let mid=Math.floor((low+high)/2);

//if the middle element is target element
if(arr[mid]===target){
    return mid;
}

 // If the target is smaller, search the left half
 if (target < arr[mid]) {
    return binarySearch(arr, target, low, mid - 1);
}
// If the target is larger, search the right half
    return binarySearch(arr, target, mid + 1, high);
}

let sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];

console.log(binarySearch(sortedArray, 7));

// - **Task 8**: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

console.log('Task 8')

function occurenceTarget(arr,target){
if(arr.length===0){
  return 0
}
let count = arr[0] === target ? 1 : 0;
// Recursive call on the rest of the array
return count + occurenceTarget(arr.slice(1), target);

}



let testArray1 = [1, 2, 3, 4, 2, 2, 5];
let testArray2 = [7, 8, 7, 9, 7, 10];


console.log(occurenceTarget(testArray1, 5)); 
console.log(occurenceTarget(testArray2, 8)); 
