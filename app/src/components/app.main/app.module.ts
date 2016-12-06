import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MyComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        MyComponent
    ],
    bootstrap: [ MyComponent ]
})
export class MyModule { }