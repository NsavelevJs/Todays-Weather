const DOMAIN = "api.openweathermap.org/";
const API_KEY = `e59cccf8df22d601bc301759ce6d0ae5`;
const cityId =  `{city id}`
const BASE_URL = `${DOMAIN}data/2.5/weather?id=${cityId}&appid=${API_KEY}`

let search = document.getElementsByClassName(".search-bar")


















//USE THIS FOR THE FIVE DAY FORCAST
// async function search(value) {


//     try {
  
  
//       let response = await axios.get(BASE_URL + value);
//       let data = response.data.Search
//       console.log(data)
//         // console.log(response.data.Search);
  
//       for(let i = 0; i < 7;i++){
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