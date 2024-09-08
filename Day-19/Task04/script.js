// Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
"use strict";
localStorage.setItem("name","sumit chaubey");
localStorage.setItem("email","sumitchaubey76@gmail.com");

console.log("before removal");
for(let i=0;i<localStorage.length;i++)
{
    let key=localStorage.key(i);
    console.log(`${key} : ${localStorage.getItem(key)}`);
        
}

localStorage.removeItem("name");
console.log("after removal");
for(let i=0;i<localStorage.length;i++)
{
    let key=localStorage.key(i);
    console.log(`${key} : ${localStorage.getItem(key)}`);
}


