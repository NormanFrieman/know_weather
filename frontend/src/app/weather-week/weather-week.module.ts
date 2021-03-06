import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWeekComponent } from './weather-week.component';
import { HighlightsComponent } from './highlights/highlights.component';



@NgModule({
  declarations: [WeatherWeekComponent, HighlightsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherWeekComponent
  ]
})
export class WeatherWeekModule { }
