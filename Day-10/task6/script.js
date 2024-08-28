// Select the input field and the paragraph
const inputField = document.querySelector('#inputField');
const displayText = document.querySelector('#displayText');

// Add a keyup event listener to the input field
inputField.addEventListener('keyup', ()=> {
  // Update the paragraph's text with the current value of the input field
  displayText.textContent = inputField.value;
});
