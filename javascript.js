var cityContainer = $(".city-container");
$(".search-button").on("click", function () {
    var cities = [];
    var cityInput = $(".Search-City").val();
    getweather(cityInput);
    if (localStorage.getItem("cities")) {
        var storage = JSON.parse(localStorage.getItem("cities"));
        storage.push(cityInput);
        localStorage.setItem("cities", JSON.stringify(storage));
    } else {
        cities.push(cityInput);
        localStorage.setItem("cities", JSON.stringify(cities));
    }

    var citiesArr = JSON.parse(localStorage.getItem("cities"));
    cityContainer.empty();
    for (let index = 0; index < citiesArr.length; index++) {
        var p = $("<p>");
        const element = citiesArr[index];
        p.text(element);
        cityContainer.append(p);
    }

});
//created the api calls and linked to the click event to display weather data// 
function getweather(city) {
    $(".weather-stats").empty();
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=47a58e37fd151683cfd266e79f7d2245", function (data) {
        console.log(data);
        console.log(data.main.humidity, data.main.pressure);
        $(".Humidity").text(data.main.humidity);
        var temperatureEl = $("<p>").text("Temperature : " + data.main.temp).appendTo(".weather-stats");
        var humidityEl = $("<p>").text("Humidity : " + data.main.humidity + " % ").appendTo(".weather-stats");
        var windEl = $("<p>").text("Wind Speed: " + data.wind.speed + " MPH ").appendTo(".weather-stats");
    });
}

// create a search input field for user to enter states
// store the user input in localstorage and append it under the search bar
// once your page loads, grab any data from localstorage and append it under the search bar -> localStorage.getItem("state") -> append the states to the page using JavaScript
// on click use the input from the user to than call the getWeatherData function which returns the main weather data (temp, wind, pressure, etc.)

// create a function to get main weather data (getWeatherData)
// this function will display the temp, wind, pressure, UV index, state, and date
// append this data to the page in the main div on the right

// create a function that returns data for a 5-day forecast using the user input (getForecast)
// this function will get the data returned from the API call and display the date, icon, temp, and humidity
// you will want to create a div with a class of 'card' in the JavaScript which you will append that data too

// create another function to get the UV Index (getUVIndex)
// you'll call this function at the bottom of the getWeatherData function and pass in the correct parameters -> getUVIndex(lon, lat)
// using the longitude and latitude from the first function call, you can use that data to call the getUVIndex function to return the UV Index of that state

// $.ajax({
//     url: "api.openweathermap.org/data/2.5/weather?q=Boston&appid=47a58e37fd151683cfd266e79f7d2245",
//     method: 'GET',
// }).then(function (response) {
//     console.log(response);
//     console.log(response.Runtime);
// });

// $.ajax({
//     url: "api.openweathermap.org/data/2.5/weather?q=Boston&appid=47a58e37fd151683cfd266e79f7d2245",
//     method: 'GET'
// }).then(function (response) {
//     console.log(response);
// })
