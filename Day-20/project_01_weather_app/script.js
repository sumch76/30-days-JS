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
        document.getElementById("city-name").textContent = data.name;
        document.getElementById("temp").textContent=`Temperature : ${data.main.temp}  C`;
        const weatherCondition=data.weather[0].description;
        document.getElementById("weather-condition").textContent=weatherCondition;
 fetchForecastData(city);
        
    }).catch((err)=>console.error("error fetcging data",err));
    
}

function fetchForecastData(city){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`)
   .then((response)=>response.json())
   .then((data)=>{
    
   })
}