const apiKey = "870cc936d9834fea90509a228cb34771";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weathericon = document.querySelector(".weather-icon")
async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = (data.main.humidity) + "%";
        document.querySelector(".wind").innerHTML = (data.wind.speed) + "km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/Clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "images/Clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "images/Rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "images/Drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "images/Mist.png"
        }

        document.querySelector(".error").style.display = "none"
        document.querySelector(".weather").style.display = "block"
    }
}
searchbtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})