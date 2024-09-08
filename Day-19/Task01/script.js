// Task 1: 
// Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
// localStorage is a part of web Storage api that allows in js to store key-value pairs in a web browser

const valueToSave="hello ,localStorage";
localStorage.setItem("myString", valueToSave);

//here setItem accepting two strings-- key(myString)
// and VALUE(valuetoSave)

const retrievedItem=localStorage.getItem("myString");

console.log(retrievedItem);


//to remove

localStorage.removeItem("myString");

//or clear all

localStorage.clear();