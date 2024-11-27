// ### Activity 3: String Manipulation with Recursion

// - **Task 5**: Write a recursive function to reverse a string. Log the result for a few test cases.
console.log("Task 5")
function reverseString(str){
if(str.length<=1){
    return str
}
return str[str.length-1]+reverseString(str.slice(0,-1))
}
console.log(reverseString("hello"));        
console.log(reverseString("World"));    

// - **Task 6**: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
console.log("Task 6")

function findPalindrome(str){
if(str.length<=1){
    return true;
}
if (str[0] !== str[str.length - 1]) {
    return false; 
}


return findPalindrome(str.slice(1, -1));
}

console.log(findPalindrome("radar"));  
console.log(findPalindrome("level"));  
console.log(findPalindrome("hello")); 