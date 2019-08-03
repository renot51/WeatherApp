import { apiKey } from './apiKey';

function fetchCurrentWeather(cityName) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey + '&units=metric')
    
    .then(res => res.json())
    .then(res => {
          console.log(res.main.temp);
        // currentWeather(data);
    })
    .catch(function () {
        alert("Error current weather")
    });
}

window.onload = function () {
  fetchCurrentWeather('Berlin');
  // fetch ForecastWeather('Berlin');
}