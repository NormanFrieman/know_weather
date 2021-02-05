import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.css']
})
export class WeatherTodayComponent implements OnInit {
  
  temp: number;
  
  day: string;
  
  hour: string;

  city: string;

  constructor() {
    this.temp = 12;
    this.day = "05/02";
    this.hour = "16:00";
    this.city = "New York, NY, USA";
  }

  ngOnInit(): void {
  }

}
