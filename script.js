let weather = {
    "apiKey": "49582289e0a528b6e830a0f01316195a",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = `Weather in ${name}`
        document.querySelector(".temp").innerText = `${Math.floor(temp)}°C`
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerText = `${icon, description}`
        document.querySelector(".humidity").innerText = `Humidity: ${humidity}`
        document.querySelector(".wind").innerText = `Wind Speed: ${speed}km/h`
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600x900/?" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};


document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        weather.search();
    }
});

weather.fetchWeather("Denver"); 