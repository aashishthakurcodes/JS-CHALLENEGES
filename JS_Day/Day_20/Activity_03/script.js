// ### Activity 3: Understanding SessionStorage
// - **Task 5:** Write a script to save a string value to `sessionStorage` and retrieve it. Log the retrieved value.

sessionStorage.setItem("greeting", "Hello, World!");

const retrievedValue = sessionStorage.getItem("greeting");

// Log the retrieved value
console.log(retrievedValue);

// - **Task 6:** Write a script to save an object to `sessionStorage` by converting it to a JSON string. Retrieve and parse the object, then log it.


const user = {
    name: "Aashish Singh",
    age: 21,
    profession: "Full Stack Developer"
};

// Convert the object to a JSON string and save it to sessionStorage
sessionStorage.setItem("user", JSON.stringify(user));
const retrievedData = sessionStorage.getItem("user");
// Parse the JSON string back into an object
const parsedObject = JSON.parse(retrievedData);
console.log(parsedObject);