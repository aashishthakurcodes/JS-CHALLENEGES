// ### Activity 5: Comparing LocalStorage and SessbionStorage
// - **Task 9:** Write a function that accepts a key and a value, and saves the value to both `localStorage` and `sessionStorage`. Retrieve and log the values from both storage mechanisms.

function saveToBothStorages(key, value) {
    // Save the value to both storages
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);

    // Retrieve and log the values from both storages
    const localValue = localStorage.getItem(key);
    const sessionValue = sessionStorage.getItem(key);

    console.log(`Value in localStorage (${key}):`, localValue);
    console.log(`Value in sessionStorage (${key}):`, sessionValue);
}

// Example usage
saveToBothStorages("exampleKey", "This is a test value.");

// - **Task 10:** Write a function that clears all data from both `localStorage` and `sessionStorage`. Verify that both storages are empty.


function clearAllStorages() {
    // Clear both storages
    localStorage.clear();
    sessionStorage.clear();

    // Verify that both storages are empty
    console.log("localStorage after clear:", Object.entries(localStorage));
    console.log("sessionStorage after clear:", Object.entries(sessionStorage));
}

// Example usage
clearAllStorages();
