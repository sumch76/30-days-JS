const quotes = [
    "Believe you can and you're halfway there.- Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The harder you work for something, the greater you will feel when you achieve it.",
    "Dream big and dare to fail. - Norman Vaughan",
    "Success is not in what you have, but who you are. -- Bo Bennett",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "If you're going through hell, keep going. - Winston Churchill",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Success doesn't just find you. You have to go out and get it.",
    "The key to success is to focus on goals, not obstacles.",
    "Dream it. Believe it. Build it."
  ];
 function DisplayQuotes()
 {
    const quoteDisplay=document.querySelector("#quotesDisplay");
    const randomIndex=Math.floor(Math.random()*quotes.length);
    quoteDisplay.textContent=quotes[randomIndex];
    document.body.style.backgroundColor=getRandomColor();
    function getRandomColor() {
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    }
 }
 DisplayQuotes();

function displayPeriodically(){
    DisplayQuotes();
    setTimeout(displayPeriodically,3000);
}
displayPeriodically();

//alternative approach to clear interval when the page is closed

//other approach is to use  setInterval instead of creating a another
//function
//setInterval(DisplayQuotes,5000);

