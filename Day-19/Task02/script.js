// Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

let user = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
};

localStorage.setItem("myKey",JSON.stringify(user));
const retrievedObj=JSON.parse(localStorage.getItem("myKey"));
console.log(retrievedObj);
