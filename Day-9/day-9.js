// Task 1: Select an HTML element by its ID and change its text content.
const paragraph = document.getElementById('changeText');
paragraph.textContent = "New Text";


// Create a new 1i element and add it to an existing ul list.

const newLi = document.createElement('li');
newLi.textContent = "New List Item";

const ulList = document.getElementById('list');
ulList.appendChild(newLi);


// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body.

const newDiv = document.createElement('div');
newDiv.textContent = "New Div Element";

document.body.appendChild(newDiv);

// Task 4: Create a new li element and add it to an existing ul list.
const newList=document.createElement("li");
newList.textContent = "New ul Element";
document.querySelector('ul').appendChild(newList);

// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM.

const elementToRemove = document.getElementById('removeElement');
elementToRemove.parentNode.removeChild(elementToRemove);





// Task 6: Remove the last child of a specific HTML element.

const parentElement = document.getElementById('parent');
parentElement.removeChild(parentElement.lastChild);


// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

const imgElement = document.getElementById('image');

imgElement.src = "newImage.jpg";




// Task 8: Add and remove a CSS class to/from an HTML element.

const buttonElement = document.getElementById('button');

buttonElement.classList.add('newClass');


buttonElement.classList.remove('oldClass');

// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.

document.querySelector('button').addEventListener("click",()=>
{
  document.querySelector('p').textContent="paragraph neww";

}

);

// Task 10: Add a mouseover event listener to an element that changes its border color.

document.querySelector('div').addEventListener("mouseover",()=>
{
  document.querySelector('div').style.borderColor="red";

}

);