//create a form with input fields and a submit button.
//use js to validate the form and display an error message if the input is invalid

var type1=document.querySelector("#type1");
var type2=document.querySelector("#type2");
//instead of writing for all here we can select only text type input;
var inputs=document.querySelectorAll('input[type="text"]');
var form=document.querySelector("form");
var hd=document.querySelector("h3");

form.addEventListener("submit",(ev)=>
{
    ev.preventDefault();

    for(var i=0;i<inputs.length;i++)
    {
        if(inputs[i].value.trim()==='')
    {
       hd.textContent="error ,some fields are empty";
       hd.style.color="red";
        return;
    } }
    hd.textContent = "Form submitted successfully!";
        hd.style.color = "green";
});