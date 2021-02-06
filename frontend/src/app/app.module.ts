import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherTodayComponent } from './weather-today/weather-today.component';
import { GetWeather } from './weather-today/weather-today.service';
import { WeatherWeekModule } from './weather-week/weather-week.module';

@NgModule({
  declarations: [
    AppComponent,
    WeatherTodayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherWeekModule,
    HttpClientModule
  ],
  providers: [GetWeather],
  bootstrap: [AppComponent]
})
export class AppModule { }
