export interface WeatherCity{
    temp: number;
    imageUrl: string;
    day: string;
    hour: string;
    city: string;

    weekInfo: {
        day: string,
        imageUrl: string,
        temp: number,
    }[];

    highlights: {
        uvIndex: number,
        windSpeed: number,
        humidity: number,
        visibility: number
    };
};