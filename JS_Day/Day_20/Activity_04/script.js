// ### Activity 4: Using SessionStorage


// - **Task 7:** Create a simple form that saves user input (e.g., name and email) to `sessionStorage` when submitted. Retrieve and display the saved data on page load.

// Display saved data on page load
window.onload = function () {
    const name = sessionStorage.getItem("name");
    const email = sessionStorage.getItem("email");

    if (name && email) {
        document.getElementById("display").textContent = `Name: ${name}, Email: ${email}`;
    }
};

// Save data to sessionStorage on form submission
document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);

    document.getElementById("display").textContent = `Name: ${name}, Email: ${email}`;

    // Optionally, clear the input fields
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
});

// - **Task 8:** Write a script to remove an item from `sessionStorage`. Log the `sessionStorage` content before and after removal.

// Save some data to sessionStorage for demonstration
sessionStorage.setItem("item1", "Value 1");
sessionStorage.setItem("item2", "Value 2");
sessionStorage.setItem("item3", "Value 3");

// Log sessionStorage contents before removal
console.log("Before removal:", Object.entries(sessionStorage));

// Remove a specific item (e.g., "item2")
sessionStorage.removeItem("item2");

// Log sessionStorage contents after removal
console.log("After removal:", Object.entries(sessionStorage));
