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
    }
    else if (data.weather[0].main == "Clear"){
        weathericon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain"){
        weathericon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weathericon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        weathericon.src = "images/mist.png";
    }
    
    

}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})