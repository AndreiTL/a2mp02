import { Component } from '@angular/core';
import {template} from './weather.tpl';

@Component({
  selector: 'weather',
  template: template
})
export class GooglemapComponent {


  constructor(){
    console.log("GooglemapComponent");
  }



}