import { HttpResponse } from '../protocols/http';

import { WeatherCity } from '../protocols/information';

import { ApiWeatherToday } from '../connection/ApiWeatherToday';

import { ResultWeather } from '../protocols/information';

export const getTemp = async (city: string): Promise<HttpResponse> => {
    const cityData: ResultWeather = await ApiWeatherToday(city);

    if(cityData.code === 404)
        return {
            body: cityData,
            status: cityData.code
        };
    
//    console.log(cityData.data);
    const day = cityData.data.location.localtime.split(" ")[0].split("-");
    
    const information: WeatherCity = {
        temp: cityData.data.current.temperature,
        imageUrl: cityData.data.current.weather_icons[0],
        day: `${day[2]}/${day[1]}`,
        hour: cityData.data.location.localtime.split(" ")[1],
        city: `${cityData.data.location.name}, ${cityData.data.location.country}`,
        weekInfo: [
            {
                day: 'Sun',
                imageUrl: "",
                temp: 15,
            },
            {
                day: 'Sun',
                imageUrl: "",
                temp: 20,
            }
        ],
        highlights: {
            uvIndex: 5,
            windSpeed: cityData.data.current.wind_speed,
            humidity: cityData.data.current.humidity,
            visibility: cityData.data.current.visibility
        }
    };

    return {
        body: information,
        status: cityData.code
    };
}