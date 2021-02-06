import { Component, Input, OnInit } from '@angular/core';

import { Highlights } from '../../helper/info-day';

import { GetWeather } from '../../weather-today/weather-today.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {

  @Input() uvIndex: number;
  
  @Input() windSpeed: number;
  
  @Input() humidity: number;
  
  @Input() visibility: number;

  public state: string;

  constructor(private getTemp: GetWeather) {
    this.state = "desactivate";
  }

  ngOnInit(): void {
    this.getTemp.setInfoHighlights.subscribe((data: Highlights) => {
      this.uvIndex = data.uvIndex;
      this.windSpeed = data.windSpeed;
      this.humidity = data.humidity;
      this.visibility = data.visibility;

      this.state = '';
    });
  }

  configInfo(highlights: Highlights): void{
    this.uvIndex = highlights.uvIndex;
    this.windSpeed = highlights.windSpeed;
    this.humidity = highlights.humidity;
    this.visibility = highlights.visibility;
  }
}
