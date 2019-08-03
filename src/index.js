import { apiKey } from './apiKey';

function fetchCureentWeather(cityName) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey)
    .then(resp => resp.json())
    .then(data => {
          console.log(data);
        // currentWeather(data);
    })
    .catch(function () {
        alert("Error current weather")
    });
}

// window.onload = function () {
//   fetchCurrentWeather('Berlin');
//   // fetchForecastWeather('Berlin');
// }