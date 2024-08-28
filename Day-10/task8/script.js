// Add a change event listener to a select dropdown that displays the selected value in a paragraph
const selectItem=document.querySelector("#color");
const selected=document.querySelector("#selected");
selectItem.addEventListener("change",function()
{
    selected.textContent=`selected color : ${this.value}`;
});