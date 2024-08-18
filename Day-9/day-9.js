// Task 1: Select an HTML element by its ID and change its text content.
const paragraph = document.getElementById('changeText');
paragraph.textContent = "New Text";


// Create a new 1i element and add it to an existing ul list.

const newLi = document.createElement('li');
newLi.textContent = "New List Item";

const ulList = document.getElementById('list');
ulList.appendChild(newLi);