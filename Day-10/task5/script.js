// Add a keydown event listener to an input field that logs the key pressed to the console.
let para=document.querySelector("p");
para.addEventListener("keydown",()=>
{
    console.log("key pressed");
    para.textContent="key pressed";
    para.style.color="red";
});


    
