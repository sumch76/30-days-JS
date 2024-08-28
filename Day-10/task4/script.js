//this is the case of when we have already a red color bg  and when me do mouseover
//it will change to blue and after doing mouseover it again will change into red

var para=document.querySelector("p")
para.addEventListener("mouseover",()=>
{
    if(para.style.backgroundColor==="red")
    {
        para.style.backgroundColor ="blue";
    }
});

document.querySelector('p').addEventListener('mouseout', function() {
    // Revert the background color to red when the mouse leaves
    this.style.backgroundColor = "red";
  });