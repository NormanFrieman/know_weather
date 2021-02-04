import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-day',
  templateUrl: './temp-day.component.html',
  styleUrls: ['./temp-day.component.css']
})
export class TempDayComponent implements OnInit {

  day: string;

  imageUrl: string;

  temp: number;

  constructor() {
    this.day = "Sun";
    this.imageUrl = "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png";
    this.temp = 15;
  }

  ngOnInit(): void {
  }

}
