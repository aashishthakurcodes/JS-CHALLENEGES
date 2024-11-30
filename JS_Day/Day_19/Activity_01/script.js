// ### Activity 1: Basic Regular Expressions
// - **Task 1**: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

const regex=/JavaScript/g
const str="JavaScript is a single threded language, JavaScript execute code line by line .JavaScript is awesome language";

const matches=str.match(regex)
console.log(matches)

// - **Task 2**: Write a regular expression to match all digits in a string. Log the matches.

const str2="There are 923 apples, 876 bananas, and 789 cherries.";
const regex2=/\d/g;
const match=str2.match(regex2);
console.log(match)