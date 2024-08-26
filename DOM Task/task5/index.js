//build a count down  timer thst starts when a button is clicked and updates the display in real-time

var start=document.querySelector("#start");
var stop=document.querySelector("#stop");
var h3=document.querySelector("h3");
var int;
var count=0;
start.addEventListener("click",()=>
{
    clearInterval(int);
//     This ensures that any previously running interval is stopped before a new one is started.
// This way, only one interval is running at a time.
    int=setInterval(()=>
    {
        h3.textContent=count;
        count++;
    },1000);
});

stop.addEventListener("click",()=>
{
    clearInterval(int);
});

