import { HttpResponse } from '../protocols/http';

import { WeatherCity } from '../protocols/information';

export const getTemp = (city: string): HttpResponse => {
    const result: WeatherCity = {
        temp: 12,
        imageUrl: '',
        day: 'Monday',
        hour: '16:00',
        city: 'New York, NY, USA',

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
            windSpeed: 7.7,
            humidity: 12,
            visibility: 5.2
        },
    };

    const response: HttpResponse = {
        body: result,
        status: 200
    };

    return response;
}