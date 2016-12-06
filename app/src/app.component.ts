import { Component } from '@angular/core';

import {NGoogleMapService} from './components/googlemap/googlemap.d';

import { template } from './app.tpl';

@Component({
  selector: 'my-app',
  template: template
})
export class AppComponent  {

  googleMapMarkers: NGoogleMapService.IMarkerPoint;

  // weatherOptions:

}
