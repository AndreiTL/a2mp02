import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div><h1>Hello {{name}}</h1><my-main></my-main></div>`
})
export class AppComponent  { name = 'Angular'; }
