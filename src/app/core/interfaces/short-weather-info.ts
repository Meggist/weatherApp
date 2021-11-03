export interface ShortWeatherInfo {
  cityName?: string,
  description?: string,
  currentTemp: number | string,
  minTemp: number | string,
  maxTemp: number | string,
  weatherType: string
}
