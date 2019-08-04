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
    .catch(err => {
        console.error(err);
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

      // the longer (clearer) way
      // Get the DOM element where the data will go
      // const tempElement = document.querySelector(`#temp0`);

      // access the innerHTML property of that element
      // set it to the value we got from destructuring the API response
      // tempElement.innerHTML = temp;


      // but shorthand avoids having to declare a variable

      // day 1

      // shorthand
      document.querySelector('#date0').innerHTML = dt_txt;
      document.querySelector('#temp0').innerHTML = temp;
      document.querySelector('#desc0').innerHTML = description;
      document.querySelector('#wind0').innerHTML = speed;
      document.querySelector('#mntemp0').innerHTML = temp_min;
      document.querySelector('#mxtemp0').innerHTML = temp_max;

      // day 2
      document.querySelector('#date1').innerHTML = dt_txt;
      document.querySelector('#temp1').innerHTML = temp;
      document.querySelector('#desc1').innerHTML = description;
      document.querySelector('#wind1').innerHTML = speed;
      document.querySelector('#mntemp1').innerHTML = temp_min;
      document.querySelector('#mxtemp1').innerHTML = temp_max;
      
      // day 3
      document.querySelector('#date2').innerHTML = dt_txt;
      document.querySelector('#temp2').innerHTML = temp;
      document.querySelector('#desc2').innerHTML = description;
      document.querySelector('#wind2').innerHTML = speed;
      document.querySelector('#mntemp2').innerHTML = temp_min;
      document.querySelector('#mxtemp2').innerHTML = temp_max;

      // day 4
      document.querySelector('#date3').innerHTML = dt_txt;
      document.querySelector('#temp3').innerHTML = temp;
      document.querySelector('#desc3').innerHTML = description;
      document.querySelector('#wind3').innerHTML = speed;
      document.querySelector('#mntemp3').innerHTML = temp_min;
      document.querySelector('#mxtemp3').innerHTML = temp_max;

      // day 5
      document.querySelector('#date4').innerHTML = dt_txt;
      document.querySelector('#temp4').innerHTML = temp;
      document.querySelector('#desc4').innerHTML = description;
      document.querySelector('#wind4').innerHTML = speed;
      document.querySelector('#mntemp4').innerHTML = temp_min;
      document.querySelector('#mxtemp4').innerHTML = temp_max;
    }
  })
  .catch(err => {
      console.error(err);
  });
}