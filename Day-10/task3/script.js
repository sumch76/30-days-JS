// Task 3: Add a mouseover event listener to an element 
// that changes its background color
document.querySelector("p").addEventListener(
  "mouseover",()=>
  {
    document.querySelector("p").style.backgroundColor="yellow";
  }
)


//mouseout is optional...
document.querySelector("p").addEventListener(
  "mouseout",()=>
  {
    document.querySelector("p").style.backgroundColor="";
  }
)





