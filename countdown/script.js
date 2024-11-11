const timerElement=document.querySelector("#timer");
let countdownSeconds=60;

function updateTimerDisplay() {
    const minutes=Math.floor(countdownSeconds/60);
    const seconds=countdownSeconds % 60;
    const formattedTime=`${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
    timerElement.textContent=formattedTime;

}
function countdown()
{
    if(countdownSeconds>0)
    {
        countdownSeconds--;
        updateTimerDisplay();
    }
    else{
        clearInterval(countdownInterval);
        alert("Time's up!");
    }
}
const countdownInterval=setInterval(countdown,1000);

