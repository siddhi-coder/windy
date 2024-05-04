const apikey = "54262d55e1e2fde55904c5bb0689a1f9";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
const card = document.querySelector(".card");
async function checkWeather(city){
    const response  =await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status  == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    var data  = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "<sup>°C</sup>";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds"){
        weathericon.src = "images/clouds.png";
        card.style.backgroundColor = "#d3d3d3"; // Light Gray for Clouds
    }
    else if (data.weather[0].main == "Clear"){
        weathericon.src = "images/clear.png";
        card.style.backgroundColor = "#87ceeb"; // Sky Blue for Clear
    }
    else if (data.weather[0].main == "Rain"){
        weathericon.src = "images/rain.png";
        card.style.backgroundColor = "#4682b4"; // Steel Blue for Rain
    }
    else if (data.weather[0].main == "Drizzle"){
        weathericon.src = "images/drizzle.png";
        card.style.backgroundColor = "#a9a9a9"; // Dark Gray for Drizzle
    }
    else if (data.weather[0].main == "Mist"){
        weathericon.src = "images/mist.png";
        card.style.backgroundColor = "#d3d3d3"; // Light Gray for Mist (same as Clouds)
    }
    
    

}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})