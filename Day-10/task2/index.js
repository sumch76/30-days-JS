// Add a double-click event listener to an image that toggles its visibility.
const img=document.getElementById("image");

img.addEventListener("dblclick",()=>
{
    img.style.visibility=img.style.visibility==="hidden"?"visible":"hidden";
});