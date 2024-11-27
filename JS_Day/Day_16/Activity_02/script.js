// ### Activity 2: Recursion with Arrays

// - **Task 3**: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

let arr=[34,23,1,13,444,656,21]
let arr2=[342,213,1,913,4484,656,21]
function sumofArray(arr){
   if(arr.length===0){
    return 0;
   }
   
   return arr[0] + sumofArray(arr.slice(1));
    
}
console.log(sumofArray(arr))
console.log(sumofArray(arr2))

// - **Task 4**: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

let testArray=[34,22,56,87,998,554,32,21,987]
function findMax(arr){
  if(arr.length===1){
    return arr[0];
  }

  let restMax = findMax(arr.slice(1));
  return arr[0] > restMax ? arr[0] : restMax;
}

console.log(findMax(testArray));