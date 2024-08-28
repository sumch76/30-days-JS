// Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

// Select the parent <ul> element
const list = document.querySelector('#myList');

// Add a click event listener to the <ul> using event delegation
list.addEventListener('click', function(event) {
  // Check if the clicked element is a <li> (list item)
  if (event.target && event.target.nodeName === 'LI') {
    // Log the text content of the clicked <li> to the console
    console.log(event.target.textContent);
  }
});


//without event delegation


const listItems = document.querySelectorAll('#myList li');

listItems.forEach(item => {
  item.addEventListener('click', function() {
    console.log(this.textContent);
  });
});

