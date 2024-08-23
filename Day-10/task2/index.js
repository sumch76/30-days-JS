// Add a double-click event listener to an image that toggles its visibility.
const img=document.getElementById("image");

img.addEventListener("dblclick",()=>
{
    this.classList.toggle("hidden");
});