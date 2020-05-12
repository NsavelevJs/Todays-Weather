const DOMAIN = "https://api.openweathermap.org/data/2.5/";
const API_KEY = `e59cccf8df22d601bc301759ce6d0ae5`;
const search = document.querySelector("#input");
const BASE_URL = `${DOMAIN}weather?appid=${API_KEY}&q=`;



search.addEventListener("submit", (e) => {
  e.preventDefault();
console.log(e.target)
//console.log(e.search-bar)
  searchResult(e.target.search.value)
//   let searchBar = search;
});

async function searchResult(value) {
  try {
    let response = await axios.get(BASE_URL + value);

    let data = response.data.main.temp;
    console.log(response.data);
    // console.log(data);

    weather(response.data)


  } catch (error) {
    `Whoops something went wrong${error}`;
  }
}
// play around with appending elements so that it can be appending on to the webpage
function weather(forcast){
   
        let city = document.querySelector("#selected-city")
        city.innerHTML = forcast.name
        list.appendChild(city)

        let cWeather = documet.createElement("div")

        let temp = document.createElement('div')
         
        temp.innerHTML = forcast.main.temp

        

        cWeather.innerHTML = forcast.weather.main
        list.appendChild(cWeather) 

};





//Getting Geolocation from the user upon approval
// const longitude;
// const latitude;
// window.addEventListener("load",()=>{
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition
//     }
// })
//possibly uneeded
//(coordinates => {
//             longitude = coordinates.coord.lon
//             latitude = coordinates.coord.lat
// BASE_URL

// add api
//
//         })

//console.log(BASE_URL)



//USE THIS FOR THE FIVE DAY FORCAST
//Example of the url for the api
//https://api.openweathermap.org/data/2.5/forecast?q=denver&appid=e59cccf8df22d601bc301759ce6d0ae5


// async function fiveDays(value) {
    // const DOMAIN = "https://api.openweathermap.org/data/2.5/";
   
    // const fiveDays = document.querySelector("#days");
    // const BASE_URL = `${DOMAIN}forcast?appid=${API_KEY}&q=`;




//     try {

//       let response = await axios.get(BASE_URL + value);
//       let data = response.data.Search
//       console.log(data)
//         // console.log(response.data.Search);

//       for(let i = 0; i < 5;i++){
//       let title = response.data.Search[i].Title
//       let poster = response.data.Search[i].Poster
//      console.log(title, poster)
//       }
//       removeLastSearch()
//       renderList(response.data.Search)

//     } catch (error) {
//       console.log(`Sorry i got nothing ${error}`);
//     }
//   }
