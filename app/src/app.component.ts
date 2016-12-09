import { Component } from '@angular/core';

import { template } from './app.tpl';

// import {LocationService} from './components/common/location.service';
// import IGoogleMapOptions = NGoogleMapService.IGoogleMapOptions;
import {NGoogleMapService} from './components/googlemap/googlemap.d';
import {Weather} from './components/weather/weather.d';

@Component({
  selector: 'my-app',
  template: template
})
export class AppComponent  {

  // googleOptions: NGoogleMapService.IGoogleMapOptions = {lat: 0.0, lng: 0.0, zoom: 3};
  // weatherOptions: Weather.IWeatherOptions = {lat: 0, lng: 0, cnt: 0};

  amountTowns: string = '1';
  
  constructor(){
    // LocationService.getCurrentLocation(this.callbackLocation.bind(this))
    this.amountTowns = '2';
  }

  // callbackLocation(coordinate: Coordinates){
  //   this.googleOptions.lat = coordinate.latitude;
  //   this.googleOptions.lng = coordinate.longitude;
  //   this.googleOptions.zoom = 8;
  //
  //   this.weatherOptions.lat = coordinate.latitude;
  //   this.weatherOptions.lng = coordinate.longitude;
  //   this.weatherOptions.cnt = 10;
  // }


}
