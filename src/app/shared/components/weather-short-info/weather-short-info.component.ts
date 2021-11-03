import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {WeatherService} from "../../../core/services/weather.service";
import {ShortWeatherInfo} from "../../../core/interfaces/short-weather-info";
import {QueryParams} from "../../../core/interfaces/queryParams";

@Component({
  selector: 'app-weather-short-info',
  templateUrl: './weather-short-info.component.html',
  styleUrls: ['./weather-short-info.component.scss']
})
export class WeatherShortInfoComponent implements OnInit {
  @ViewChild('output') output!: ElementRef
  @ViewChild('container') container!: ElementRef
  @Input() cityCoordinates: QueryParams = {latitude: 0, longitude: 0}
  info?: ShortWeatherInfo

  ngOnInit() {
    this.weather.getCityShortWeatherInfo(this.cityCoordinates)
      .subscribe({
        next: data => {
          this.info = data
          this.changeDetectorRef.detectChanges()
          this.fitCityName()
        },
        error: message => console.log(message)
      })
  }

  fitCityName(): void {
    let fontSize = window.getComputedStyle(this.output.nativeElement).fontSize
    this.output.nativeElement.style.fontSize = (parseFloat(fontSize) - 1) + 'px'
    if (this.output.nativeElement.clientHeight >= this.container.nativeElement.clientHeight) {
      this.fitCityName();
    }
  }

  constructor(private weather: WeatherService,
              private changeDetectorRef: ChangeDetectorRef) {
  }
}
