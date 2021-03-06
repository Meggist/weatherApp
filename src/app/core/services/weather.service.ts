import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShortWeatherInfo} from "../interfaces/short-weather-info";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {QueryParams} from "../interfaces/queryParams";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {

  }

  convertTemperature(value: number): number | string {
    let result: number | string = Math.round(value)
    if (result > 0) {
      result = '+' + result
    }
    return result
  }

  private apiKey: string = "526db061ac165509c3068dd0a8ce8045"

  getCityShortWeatherInfo(coordinates: QueryParams): Observable<ShortWeatherInfo> {
    return this.http
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&appid=${this.apiKey}`)
      .pipe(map((data: any) => ({
        cityName: coordinates.name,
        description: coordinates.description,
        currentTemp: this.convertTemperature(data.main.temp),
        minTemp: this.convertTemperature(data.main.temp_min),
        maxTemp: this.convertTemperature(data.main.temp_max),
        weatherType: data.weather[0].main
      })))
  }

}
