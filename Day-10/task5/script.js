let para=document.querySelector("p");
para.addEventListener("keydown",()=>
{
    console.log("key pressed");
    para.textContent="key pressed";
    para.style.color="red";
})