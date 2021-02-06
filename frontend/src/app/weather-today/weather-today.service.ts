import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetWeather{
    constructor(private http: HttpClient){}

    getTempInfo(cityName: string){
        return this.http.get(`http://localhost:3000/getWeather/${cityName}`);
    }
}