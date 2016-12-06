import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { GooglemapComponent } from './components/googlemap/googlemap.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, GooglemapComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
