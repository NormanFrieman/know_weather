import { Component, OnInit } from '@angular/core';

import { GetWeather } from './weather-today.service';

import { Weather } from '../helper/info-day';

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.css']
})
export class WeatherTodayComponent implements OnInit {
  
  public temp: number;
  
  public day: string;
  
  public hour: string;

  public city: string;

  public urlImage: string;

  public state: string;

  constructor(private getTemp: GetWeather) {
    this.state = "desactivate";
  }

  ngOnInit(): void {
    this.getCity('New York');
  }

  getCity(onCity?: string): void{
    const cityName = onCity || document.querySelector('input').value;
    if(cityName === '')
      alert("Empty input");
    else{
      this.getTemp.getTempInfo(cityName).subscribe((data: Weather) => {
        console.log(data);

        this.temp = data.temp;
        this.day = data.day;
        this.hour = data.hour;
        this.city = data.city;
        this.urlImage = data.imageUrl;

        this.getTemp.setInfoHighlights.emit(data.highlights);

        this.state = '';

      }, err => {
        console.error(err);
        alert('Unknown city');
      }, () => console.log('done loading info'));
    }
  }
}
