import { apiKey } from './apiKey';

function fetchCurrentWeather(cityName) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey + '&units=metric')
    
    .then(res => res.json())
    .then(res => {
          console.log(res.main.temp);
    })
    .catch(function () {
        alert("Error current weather")
    });
}

window.onload = function () {
  fetchCurrentWeather('Berlin');
  fetchForecastWeather('Berlin', 'DE');
}
function fetchForecastWeather(cityName, countryCode) {
  fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + ',' + countryCode + '&appid=' + apiKey + '&units=metric')
  .then(res => res.json())
  .then(res => {
      for (let i = 0; i < 5; i++) {
        // console.log(res.list[i * 8]);
        // console.log(`
        //   ${res.list[i * 8].dt_txt}
        //   ${res.list[i * 8].main.temp}
        //   ${res.list[i * 8].weather[0].description}
        //   ${res.list[i * 8].wind.speed}
        //   ${res.list[i * 8].main.temp_min, res.list[i * 8].main.temp_max} 
        // `);
        
        const { dt_txt } = res.list[i * 8];
        // nested destructuring syntax
        const { main: {temp, temp_min, temp_max}  } = res.list[i * 8];
        const { weather: [{ description }] } = res.list[i * 8];
        const { wind: {speed}  } = res.list[i * 8];

        console.log(dt_txt, temp, description, speed, temp_min, temp_max);
      }
  })
  .catch(function () {
      alert("Error current weather")
  });
}