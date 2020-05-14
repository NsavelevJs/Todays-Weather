const DOMAIN = "https://api.openweathermap.org/data/2.5/";
const API_KEY = `e59cccf8df22d601bc301759ce6d0ae5`;
const search = document.querySelector("#input");

const BASE_URL = `${DOMAIN}weather?appid=${API_KEY}&units=imperial&q=`;

const BASE_URL2 = `${DOMAIN}forecast?appid=${API_KEY}&units=imperial&q=`;

search.addEventListener("submit", (e) => {
  e.preventDefault();
  searchResult(e.target.search.value);
});

async function searchResult(value) {
  try {
    let response = await axios.get(BASE_URL + value);
    let forecastResponse = await axios.get(BASE_URL2 + value);

    // let data = response.data;

    cityName(response.data);
    removeLastSearch();
    forecast(forecastResponse.data.list);
    

  } catch (error) {
    `Whoops! something went wrong${error}`;
  }
}

let city = document.querySelector("#selected-city");
let weatherDescription = document.querySelector("#current");

function cityName(name) {
  city.innerHTML = `${name.name}`;
  weatherDescription.innerHTML = `${name.weather[0].description}<br/>`;
  weatherDescription.innerHTML += `${name.main.temp}℉`;
  
}

function forecast(data) {
  console.log(data);
  for (let i = 0; i < data.length; i += 8) {
    let div = document.createElement("div");
    div.className = "day";
    div.innerHTML = `<h2>Date: ${data[i].dt_txt}</h2><h2>${data[i].main.feels_like}℉</h2> <h2>${data[i].weather[0].description}</h2>`;
    let forecastDiv = document.querySelector("#forecast");
    forecastDiv.appendChild(div);
  }
}

function removeLastSearch() {
  const oldSearch = document.querySelector("#forecast");
  while (oldSearch.lastChild) {
    oldSearch.removeChild(oldSearch.lastChild);
  }
}

