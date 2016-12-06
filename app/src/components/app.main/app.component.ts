import { Component } from '@angular/core';
import {template} from './app.tpl';

@Component({
    selector: 'my-main',
    template: template
})
export class MyComponent {
    constructor(){
        console.log("GooglemapComponent");
    }
}