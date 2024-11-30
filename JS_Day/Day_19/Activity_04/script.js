// ### Activity 4: Assertions and Boundaries

// - **Task 7**: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

const text = "Hello world, this is JavaScript.";
const regex= /^\w+/;
const match=text.match(regex);

if (match) {
    console.log("Matched word at the beginning:", match[0]); // First (and only) capture group
} else {
    console.log("No match found!");
}


// - **Task 8**: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

const str="Hello world this is Javascript";
const regex2 = /\w+$/;
const matches=str.match(regex2);
if(matches){
    console.log("Matches word at the END", matches[0])
}
else{
    console.log("No match found")
}