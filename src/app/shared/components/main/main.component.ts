import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {MapsAPILoader} from "@agm/core";
import {QueryParams} from "../../../core/interfaces/queryParams";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  myCities: QueryParams[] = [{
    "latitude": 51.5072178,
    "longitude": -0.1275862,
    "description": "UK",
    "name": "London"
  }]
  private geoCoder: any

  @ViewChild('search') searchElementRef: any

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
  }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;
      const options = {
        types: ['(cities)']
      };
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, options)
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          let description: any = ''
          description = place.formatted_address?.split(',')
          if (description?.length !== 1) {
            description.shift()
            description = description.map((item: string) => item.substring(1))
          }
          description = description.join(',  ')
          const coordinates: QueryParams = {
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng(),
            description: description,
            name: place.name
          }
          this.myCities.push(coordinates)
        });
      });
    });
  }

}
