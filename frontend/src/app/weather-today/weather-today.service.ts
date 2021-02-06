import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Highlights } from '../helper/info-day';

@Injectable()
export class GetWeather{

    setInfoHighlights = new EventEmitter<Highlights>();

    constructor(private http: HttpClient){}

    getTempInfo(cityName: string){
        return this.http.get(`https://know-weather-api.herokuapp.com/getWeather/${cityName}`);
    }
}