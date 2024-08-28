// Select the input field and the paragraph
const inputField = document.querySelector('#inputField');
const displayText = document.querySelector('#displayText');

// Add a keyup event listener to the input field
inputField.addEventListener('keyup', ()=> {
  // Update the paragraph's text with the current value of the input field
  displayText.textContent = inputField.value;
});



//if we are using arrow function we should not use this kryword because
//it do not have their own this context 
// In JavaScript, the this context inside an arrow function is lexically bound,
//  meaning it refers to the this value from the surrounding code (outside the function), not the element that triggered the event.