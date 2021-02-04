import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherTodayComponent } from './weather-today/weather-today.component';
import { WeatherWeekModule } from './weather-week/weather-week.module';

@NgModule({
  declarations: [
    AppComponent,
    WeatherTodayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherWeekModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
