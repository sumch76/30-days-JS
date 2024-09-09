// Function to clear all data from both localStorage and sessionStorage
function clearAllStorages() {
    // Clear localStorage
    localStorage.clear();

    // Clear sessionStorage
    sessionStorage.clear();

    // Verify if localStorage is empty
    if (localStorage.length === 0) {
        console.log("localStorage is now empty.");
    } else {
        console.log("localStorage still contains data.");
    }

    // Verify if sessionStorage is empty
    if (sessionStorage.length === 0) {
        console.log("sessionStorage is now empty.");
    } else {
        console.log("sessionStorage still contains data.");
    }
}

// Example usage:
clearAllStorages();
