// Select the parent <ul> element and the "Add Item" button
const list = document.querySelector('#myList');
const addItemButton = document.querySelector('#addItem');

// Add an event listener to the <ul> using event delegation
list.addEventListener('click', function(event) {
  // Check if the clicked element is an <li> (list item)
  if (event.target && event.target.nodeName === 'LI') {
    // Log the text content of the clicked <li> to the console
    console.log('Clicked:', event.target.textContent);
  }
});

// Add a click event listener to the "Add New Item" button
addItemButton.addEventListener('click', function() {
  // Create a new <li> element
  const newItem = document.createElement('li');
  newItem.textContent = 'Newly Added Item';
  
  // Append the new <li> to the <ul>
  list.appendChild(newItem);
});
