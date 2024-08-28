// Select the form element
const form = document.querySelector('#myForm');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Create a FormData object to hold the form data
  const formData = new FormData(form);

  // Log the form data to the console
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});
