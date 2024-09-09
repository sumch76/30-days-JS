function saveToBothStorages(key, value) {
    // Save to localStorage
    localStorage.setItem(key, value);

    // Save to sessionStorage
    sessionStorage.setItem(key, value);

    // Retrieve from localStorage
    const localStorageValue = localStorage.getItem(key);

    // Retrieve from sessionStorage
    const sessionStorageValue = sessionStorage.getItem(key);

    // Log the values
    console.log(`Value from localStorage: ${localStorageValue}`);
    console.log(`Value from sessionStorage: ${sessionStorageValue}`);
}

// Example usage
saveToBothStorages("myKey", "Hello, Storage!");
