// ### Activity 2: Reverse Integer
// - **Task 2**: Solve the "Reverse Integer" problem on LeetCode.
//   - Write a function that takes an integer and returns it with its digits reversed.
//   - Handle edge cases like negative numbers and numbers ending in zero.
//   - Log the reversed integers for a few test cases.


function reverseNumber(val) {
    // Determine the sign and work with the absolute value
    const isNegative = val < 0;
    val = Math.abs(val);

    let reversed = 0;

    // Process each digit of the number
    while (val !== 0) {
        let lastDigit = val % 10; // Get the last digit
        reversed = reversed * 10 + lastDigit; // Append it to the reversed number
        val = Math.floor(val / 10); // Remove the last digit
    }

    // Restore the sign if the number was negative
    if (isNegative) {
        reversed = -reversed;
    }

    // Check for 32-bit signed integer overflow
    if (reversed > 2 ** 31 - 1 || reversed < -(2 ** 31)) {
        return 0;
    }

    return reversed;
}

// Test Cases
console.log(reverseNumber(123)); 
console.log(reverseNumber(-123)); 
console.log(reverseNumber(120));
console.log(reverseNumber(0)); 

 