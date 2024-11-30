// ### Activity 2: Character Classes and Quantifiers

// - **Task 3**: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
let str="Javascript is a single threded language, Javascript execute code line by line .Javascript is awesome language";

const regex=/\b[A-Z][a-z]*\b/g;

const match=str.match(regex);
console.log(match)

// - **Task 4**: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

const str2="There are 234 persons with 439 weapons and we are only 113.";
const regex2=/\d+/g;
const matches=str2.match(regex2);
console.log(matches)