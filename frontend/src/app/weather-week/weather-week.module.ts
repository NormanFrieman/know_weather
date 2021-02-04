import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWeekComponent } from './weather-week.component';
import { TempDayComponent } from './temp-day/temp-day.component';



@NgModule({
  declarations: [WeatherWeekComponent, TempDayComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherWeekComponent
  ]
})
export class WeatherWeekModule { }
