import { Component, OnInit } from '@angular/core';

import { Day } from '../helper/info-day';

@Component({
  selector: 'app-weather-week',
  templateUrl: './weather-week.component.html',
  styleUrls: ['./weather-week.component.css']
})

export class WeatherWeekComponent implements OnInit {

  days: Day[];

  constructor() {
    this.days = [{
      name: "Sun",
      imageUrl: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
      temp: 15,
    },
    {
      name: "Mon",
      imageUrl: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
      temp: 15,
    },
    {
      name: "Tue",
      imageUrl: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
      temp: 15,
    },
    {
      name: "Wed",
      imageUrl: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
      temp: 15,
    },
    {
      name: "Thu",
      imageUrl: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
      temp: 15,
    },
    {
      name: "Fri",
      imageUrl: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
      temp: 15,
    },
    {
      name: "Sat",
      imageUrl: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
      temp: 15,
    }];
  }

  ngOnInit(): void {
  }

}
