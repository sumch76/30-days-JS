// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
var btn = document.querySelector("button");
var para = document.querySelector("p");

btn.addEventListener("click",()=>
{
      para.textContent="this is updated para when we click on the button";
});