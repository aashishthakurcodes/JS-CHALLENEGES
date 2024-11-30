// ### Activity 5: Practical Applications

// - **Task 9**: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

console.log("Task 9");

const password="Password123#";
const regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/

if(regex.test(password)){
    console.log("Password is valid")
}
else{
    console.log("Invalid Password")
}

// - **Task 10**: Write a regular expression to validate a URL. Log whether the URL is valid.


console.log("Task 10");
const url = "https://www.example.com/path?query=123#fragment";

const regex2 = /^https?:\/\/(www\.)?[\w-]+\.[a-z]{2,}(\/[\w\-\.]*)*(\?[^\s]*)?(#[^\s]*)?$/;

if (regex2.test(url)) {
    console.log("URL is valid.");
} else {
    console.log("URL is invalid.");
}
