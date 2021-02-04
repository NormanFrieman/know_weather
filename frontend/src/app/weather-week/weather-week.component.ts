import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-week',
  templateUrl: './weather-week.component.html',
  styleUrls: ['./weather-week.component.css']
})
export class WeatherWeekComponent implements OnInit {

  days: object[];

  constructor() {
    this.days = [{
      day: "Sun",
      imageUrl: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
      temp: 15,
    },
    {
      day: "Mon",
      imageUrl: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
      temp: 15,
    },
    {
      day: "Tue",
      imageUrl: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
      temp: 15,
    },
    {
      day: "Wed",
      imageUrl: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
      temp: 15,
    },
    {
      day: "Thu",
      imageUrl: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
      temp: 15,
    },
    {
      day: "Fri",
      imageUrl: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
      temp: 15,
    },
    {
      day: "Sat",
      imageUrl: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
      temp: 15,
    }]
  }

  ngOnInit(): void {
  }

}
