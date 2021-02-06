export interface WeatherCity{
    temp: number;
    imageUrl: string;
    day: string;
    hour: string;
    city: string;
    highlights: {
        uvIndex: number,
        windSpeed: number,
        humidity: number,
        visibility: number
    };
};

export interface ResultWeather{
    data: any;
    code: number;
};