export interface Highlights{
    uvIndex: number;
    windSpeed: number;
    humidity: number;
    visibility: number;
}

export interface Weather{
    temp: number;
    imageUrl: string;
    day: string;
    hour: string;
    city: string;
    highlights: Highlights;
}