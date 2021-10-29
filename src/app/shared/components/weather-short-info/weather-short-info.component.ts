import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from "../../../core/services/weather.service";
import {ShortWeatherInfo} from "../../../core/interfaces/short-weather-info";
import {QueryParams} from "../../../core/interfaces/queryParams";

@Component({
  selector: 'app-weather-short-info',
  templateUrl: './weather-short-info.component.html',
  styleUrls: ['./weather-short-info.component.scss']
})
export class WeatherShortInfoComponent implements OnInit {
  @Input() cityCoordinates: QueryParams = {latitude: 0, longitude: 0}
  info?: ShortWeatherInfo

  ngOnInit() {
    this.weather.getCityShortWeatherInfo(this.cityCoordinates)
      .subscribe({
        next: data => this.info = data,
        error: message => console.log(message)
      })

  }

  constructor(private weather: WeatherService) {
  }
}
