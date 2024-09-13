const apikey="d42afe63aaca66988a185b38d17377f1"

document.getElementById("search-btn").addEventListener("click",()=>
{
    const city=document.getElementById("city-name").value;
    fetchWeatherData(city);

});


function fetchWeatherData(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
    .then((response)=>response.json())
    .then((data)=>{
        // document.getElementById("city-name").textContent = data.name;
        // document.getElementById("temp").textContent=`Temperature :`
        console.log(data);
        
    })
}
