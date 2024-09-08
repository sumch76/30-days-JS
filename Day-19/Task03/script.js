// Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. 
// Retrieve and display the saved data on page load
function saveToLocalStorage(e)
{
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("phone").value;

    const userData={
        name:name,
        email:email,
        phone:phone
    };

    localStorage.setItem("keyValue",JSON.stringify(userData));
    displayData();
}

function displayData()
{
    const savedData=document.getElementById("savedData");

 const  savedUser = localStorage.getItem("keyValue");

 if(savedUser){

    const userData=JSON.parse(savedUser);
    savedData.textContent=`Name: ${userData.name} , Email: ${userData.email} ,Phone: ${userData.phone}`;
    
 }
 
 else{
    savedData.textContent="No data saved yet";
 }
}
document.getElementById("myForm").addEventListener("submit",saveToLocalStorage);
// window.onload=displayData;
