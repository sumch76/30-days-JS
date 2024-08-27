// Add a double-click event listener to an image that toggles its visibility.

const img = document.querySelector('img');

img.addEventListener('dblclick', () => {
  img.style.display = img.style.display === 'none' ? 'block' : 'none';
});