// Tasks/Activities
// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

const num = [1, 2, 3, 4, 5];
console.log(num);

// Task 2: Access the first and last elements of the array and log them to the console.
console.log(num[0]);
console.log(num[num.length - 1]);

// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.

const numbers = [98, 76, 23, 45, 22, 19, 10];
console.log("Array before push method", numbers)
numbers.push(78, 90, 7777);
console.log("Array after push method", numbers)

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
console.log("Array before pop method", numbers)
numbers.pop();
console.log("Array after pop method", numbers)

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
console.log("Array Before shift method", numbers)
numbers.shift();
console.log("Array after shift method", numbers)

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated 
console.log("Array before unshift", numbers)
numbers.unshift(9999);
console.log("Array after unshift", numbers)

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const value = [3, 4, 5, 6, 7, 8, 9]
const doubleValue = value.map((val) => (val * 2));
console.log(doubleValue)

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const filterData = [87, 90, 65, 55, 34, 78, 67, 72, 72]
const getData = filterData.filter((num) => (num % 2 == 0))
console.log(getData)

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sumArray = [67, 37, 28, 29, 25, 38]
const sum = sumArray.reduce((acc, num) => acc + num, 0);
console.log(sum);

// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.
const data = ["Ram", "Shivam", "Uday", "Rohan", "Sunita", "Reena"]
for (let i = 0; i <= data.length - 1; i++) {
    console.log(data[i])
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
const userData = [56, 89, 34, 67, 12, 90];
userData.forEach((num, ind) => (
    console.log(num)
))

// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const twodArray = [[2, 4, 5]
    , [6, 4, 9]
    , [9, 8, 6]];
console.log(twodArray)

// Task 13: Access and log a specific element from the two-dimensional array.
console.log(twodArray[0][1]);
console.log(twodArray[2][0]);
console.log(twodArray[1][2]);
console.log(twodArray[1][1]);


// Feature Request

// Array Manipulation Script: Demonstrate creating an array, adding/removing elements using push, pop, shift, and unshift.

const newArray=[23,4,5,67,32,56,11,89,44];
console.log(newArray);
//push
newArray.push(88,90,56);
console.log(newArray);
//pop
newArray.pop();
console.log(newArray);
//shift
newArray.shift();
console.log(newArray);
//unshift
newArray.unshift();
console.log(newArray);


// Array Transformation Script: Use map, filter, and reduce methods to transform and aggregate array data.

const arrData=[34,54,77,89,98,67,99]
console.log(arrData);
const doubled=arrData.map((val)=>(val*2));
console.log(doubled);

const filterEven=arrData.filter((num)=>(num%2==0));
console.log(filterEven)

const total=arrData.reduce((acc,val)=>acc+val,0);
console.log(total);

// Array Iteration Script: Iterate over an array using both for loop and forEach method and log each element.

const var1=[78,90,67,56,22,113,]
for(let i=0;i<=var1.length-1;i++){
    console.log(var1[i])
}

console.log("Iteration using For Each loop")
var1.forEach((num,index)=>(console.log(num)))


// Two-dimensional Array Script: Demonstrate the creation and manipulation of a two-dimensional array.

const matrix=[[2,3,4,5],[7,8,91],[98,56,33,21]]
console.log(matrix);
console.log(matrix[2][2]);
console.log(matrix[1][2]);
console.log(matrix[0][0]);

// Update an element in the two-dimensional array
matrix[1][1] = 0;
matrix[2][0] = 10;

// Log the updated two-dimensional array
console.log("\nUpdated Matrix:");
console.log(matrix);

// Iterate over the two-dimensional array using nested loops
console.log("\nIterating over the Matrix:");
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`Element at [${i}][${j}]:`, matrix[i][j]);
  }
}

