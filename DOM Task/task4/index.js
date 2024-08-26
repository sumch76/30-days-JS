//create an unordered list. allow users to add and remove list items dynamically using button

var add=document.querySelector("#add");
var remove=document.querySelector("#remove");
var input=document.querySelector("input");
var ul=document.querySelector("ul");
var li;

add.addEventListener("click",()=>
{
    if(input.value.trim()==='' ){}
else
{
    li=document.createElement("li");
    li.textContent=input.value;
    ul.appendChild(li);
    input.value="";
}
})

remove.addEventListener("click",()=>
{
    if(ul.lastChild)
    {
    ul.removeChild(ul.lastChild);
    } 
});
//ul.lastchild esliye use kiya hai kyuki  jo last element hoga wo delete hota rahegaa
//esee pehele tha  ul.removeChild(li)

