const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

// ### Activity 2: Using LocalStorage
// - **Task 3:** Create a simple form that saves user input (e.g., name and email) to `localStorage` when submitted. Retrieve and display the saved data on page load.

window.onload = function() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    if (name && email) {
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;

        document.getElementById('display').innerText = `Name: ${name}, Email: ${email}`;
    }
};

// Function to save form data to localStorage
function saveData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    document.getElementById('display').innerText = `Name: ${name}, Email: ${email}`;

    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}


// - **Task 4:** Write a script to remove an item from `localStorage`. Log the `localStorage` content before and after removal.


// Save a string value to `localStorage` for demonstration
localStorage.setItem('name', 'Rambo Kaushik');

// Log the localStorage content before removal
console.log('Before removal:', localStorage);

// Remove an item from localStorage
localStorage.removeItem('name');

// Log the localStorage content after removal
console.log('After removal:', localStorage);