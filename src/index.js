import { apiKey } from './apiKey';

window.onload = function () {
  fetchCurrentWeather('Berlin');
  fetchForecastWeather('Berlin', 'DE');
}

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

        // shorthand
        document.querySelector(`#date0`).innerHTML = dt_txt;

        document.querySelector('#desc0').innerHTML = description;



        // the longer (clearer) way
        // Get the DOM element where the data will go
        const tempElement = document.querySelector(`#temp0`);
  
        // access the innerHTML property of that element
        // set it to the value we got from destructuring the API response
        tempElement.innerHTML = temp;

        const windElement = document.querySelector('#wind0');

        windElement.innerHTML = speed;

        const tempMin = document.querySelector('#mntemp0');

        tempMin.innerHTML = temp_min;

        const tempMax = document.querySelector('#mxtemp0');

        tempMax.innerHTML = temp_min;
      }
  })
  .catch(function () {
      alert("Error current weather")
  });
}