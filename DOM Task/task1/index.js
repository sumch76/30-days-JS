//1.create a HTML page with a button .

// when the button is clicked,change the text of the a paragraph element



// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     let para=document.querySelector("p");
//     para.textContent="task 1 is done";
//     para.style.color="red";

//     // setTimeout(()=>{
//     //     btn.disabled=false;
//     //     btn.style.backgroundColor="green";
//     //     para.textContent="click me";
//     // },5000);
// }
//     );


//using arrow function
    var btn=document.querySelector("button");
    var para=document.querySelector("p");
    btn.addEventListener("click",()=>
    {
        para.textContent="task 1 is done"
        para.style.color="red";
    });

