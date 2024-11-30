// ### Activity 3: Grouping and Capturing
// - **Task 5**: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

console.log('Task 5')
const phoneNumber="(123) 456-7890";

const regex=/\((\d{3})\)\s(\d{3})-(\d{4})/;

const match=phoneNumber.match(regex);

if (match) {
    console.log("Area Code:", match[1]); 
    console.log("Central Office Code:", match[2]);
    console.log("Line Number:", match[3]); 
} else {
    console.log("No match found!");
}
// - **Task 6**: Write a regular expression to capture the username and domain from an email address. Log the captures.

console.log('Task 6')
const user="singhaashish909@gmail.com";

const regex2=/^([\w.-]+)@([\w.-]+\.[a-zA-Z]{2,})$/;
           
const matches=user.match(regex2);
if(matches){
    console.log("Username is",matches[1])
    console.log("Domain is",matches[2])
}
else{
    console.log("No match found")
}