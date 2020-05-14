

## Project Name
Todays-Weather_app

## Project Description

Check current weather from your current city and gives you a five day forcast
+
a five day forcast
## API
https://openweathermap.org/
## API  Data Sample
```json
{
    "coord": {
        "lon": -73.95,
        "lat": 40.65
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 282.69,
        "feels_like": 280.2,
        "temp_min": 282.04,
        "temp_max": 283.71,
        "pressure": 1007,
        "humidity": 76
    },
    "visibility": 16093,
    "wind": {
        "speed": 2.1,
        "deg": 30
    },
    "clouds": {
        "all": 90
    },
    "dt": 1588969535,
    "sys": {
        "type": 1,
        "id": 4610,
        "country": "US",
        "sunrise": 1588931135,
        "sunset": 1588982338
    },
    "timezone": -14400,
    "id": 5110302,
    "name": "Brooklyn",
    "cod": 200
}
```
## Wireframes
![Wireframe](https://i.imgur.com/9kTtUfe.jpg)
![Wireframe](https://i.imgur.com/YnIF1D8.jpg)


#### MVP 

- Show current weather.
- Five day forcast.
- Ability to seach for a city.

#### PostMVP  
- Wind mph for the current city.
- Humidity percentage.
- Precipitation percentage.
- Feels like temperature
- Allow location pop-up to ask for permission to access the devices location. 


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|May 11| Boiler plate HTML and structure, API Connectivity + background styling(decision for wallpaper or linear-gradiant colors.)| complete
|May 12| Style page with CSS | complete
|May 12| Setup website api data with JS| complete
|May 13| Test App, check for bugs and fix | complete
|May 14| Finalize app and tweek final view. | complete


## Priority Matrix

![Wireframe](https://i.imgur.com/na4evfI.jpg)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | 
| --- | :---: |  :---: | :---: | :---: |
| Add Boiler plate HTML, Title and find a minimalist background photo or color scheme for the page layout | M | 3hrs| 2hrs |  |
| Design the page with CSS | M | 6hrs| 5hrs |  |
| Test for errors | H | 6hrs| 4hrs |  |
| Connect API to the website with JS| H | 9hrs| 7hrs | |
| Additional css and styling for finished product look| H | 6hrs| 3hrs | |
| Total| N/A | 30hrs| 21hrs | |


## Code Snippet

```
const BASE_URL = `${DOMAIN}weather?appid=${API_KEY}&units=imperial&q=`;

const BASE_URL2 = `${DOMAIN}forecast?appid=${API_KEY}&units=imperial&q=`;
```

## Change Log
- Moved geolocation down to post mvp