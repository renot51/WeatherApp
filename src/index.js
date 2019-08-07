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
      let day = "Today";
      if (i === 1) {
        day = "Tomorrow";
      } else if (i > 1) {
        day = `In ${i + 1} days`;
      }
      document.querySelector('.row').innerHTML += `
        <div class="col-2">
          <div class="card bg-light">
            <h3 class="mx-auto mb-0" id="location${i}"> ${cityName} </h3>
            <hr>
            <h4 class="card-title mx-auto">${day}</h4>
            <h5 class="dates mx-auto text-black-50" id="date${i}"> ${dt_txt}</h5>
            <img id="icon${i}" class="card-img-top mx-auto" style="width: 5rem;">
            <div id="weather${i}" class="card-body d-flex flex-column align-items-center">
              <h4 id="temp${i}"> Temperature: ${temp}</h4>
              <p id="desc${i}" class="card-text mx-auto"> Description: ${description} </p>
              <p id="wind${i}" class="card-text">Wind: ${speed}</p>
              <p class="card-text">
                Min temp: ${temp_min} Max temp: ${temp_max}
              </p>
            </div>
          </div>
        </div>
      `;


      // // shorthand
      // document.querySelector('#date0').innerHTML = dt_txt;
      // document.querySelector('#temp0').innerHTML = temp;
      // document.querySelector('#desc0').innerHTML = description;
      // document.querySelector('#wind0').innerHTML = speed;
      // document.querySelector('#mntemp0').innerHTML = temp_min;
      // document.querySelector('#mxtemp0').innerHTML = temp_max;

      // // day 2
      // document.querySelector('#date1').innerHTML = dt_txt;
      // document.querySelector('#temp1').innerHTML = temp;
      // document.querySelector('#desc1').innerHTML = description;
      // document.querySelector('#wind1').innerHTML = speed;
      // document.querySelector('#mntemp1').innerHTML = temp_min;
      // document.querySelector('#mxtemp1').innerHTML = temp_max;
      
      // day 3
      // document.querySelector('#date2').innerHTML = dt_txt;
      // document.querySelector('#temp2').innerHTML = temp;
      // document.querySelector('#desc2').innerHTML = description;
      // document.querySelector('#wind2').innerHTML = speed;
      // document.querySelector('#mntemp2').innerHTML = temp_min;
      // document.querySelector('#mxtemp2').innerHTML = temp_max;

      // // day 4
      // document.querySelector('#date3').innerHTML = dt_txt;
      // document.querySelector('#temp3').innerHTML = temp;
      // document.querySelector('#desc3').innerHTML = description;
      // document.querySelector('#wind3').innerHTML = speed;
      // document.querySelector('#mntemp3').innerHTML = temp_min;
      // document.querySelector('#mxtemp3').innerHTML = temp_max;

      // // day 5
      // document.querySelector('#date4').innerHTML = dt_txt;
      // document.querySelector('#temp4').innerHTML = temp;
      // document.querySelector('#desc4').innerHTML = description;
      // document.querySelector('#wind4').innerHTML = speed;
      // document.querySelector('#mntemp4').innerHTML = temp_min;
      // document.querySelector('#mxtemp4').innerHTML = temp_max;
    }
  })
  .catch(err => {
      console.error(err);
  });
}
