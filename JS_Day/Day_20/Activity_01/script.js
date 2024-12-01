// ### Activity 1: Understanding LocalStorage
// - **Task 1:** Write a script to save a string value to `localStorage` and retrieve it. Log the retrieved value.
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

localStorage.setItem("userName","Aashish Singh");
let getValue=localStorage.getItem("Getting Local Storage data:-","userName");
console.log(getValue)


// - **Task 2:** Write a script to save an object to `localStorage` by converting it to a JSON string. Retrieve and parse the object, then log it.


const user={
    name:"Rahul",
    age:21,
    profession:"Web developer"

}

localStorage.setItem("user",JSON.stringify(user));

const getItem=localStorage.getItem("user");
// Parse the JSON string back into an object
const parseData=JSON.parse(getItem);
console.log(parseData)