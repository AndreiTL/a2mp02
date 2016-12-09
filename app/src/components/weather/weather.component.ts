import {Component, Input, Output } from '@angular/core';
import {template} from './weather.tpl';

import {Weather} from './weather.d';

import {RestService} from '../common/rest.service';
import {LocationService} from '../common/location.service'

@Component({
  selector: 'weather',
  template: template
})
export class WeatherComponent {
  @Input() amounttowns: string;
  @Output() updateMarkers: Function;

  API: string = `94c7919f6854ca11558382472a998f8f`;
  // cnt: string = '10';
  // innerBlock: string;
  // url: string = `http://api.openweathermap.org/data/2.5/weather?id=625144&APPID=${this.API}`; // Minsk id
  typeRequest: string = 'GET';
  async: boolean = true;
  weatherObject: Weather.IWeatherResponse;
  // townTableTemp: string = '';
  // townTableRender: string = 'Loading';

  townsTable: Weather.ITownWeather[] ;

  callbackDownloadFunction: Function;

  constructor(/*restService: RestService*/){
    console.log("WeatherComponent");
    LocationService.getCurrentLocation().then(
      (coordinate: Coordinates) => {
        this.downloadWeatherInCircle(coordinate.latitude, coordinate.longitude, parseInt(this.amounttowns));
      }
    )

  }

  // callbackLocation(coordinate: Coordinates) {
  //   this.downloadWeatherInCircle(coordinate.latitude, coordinate.longitude, 1, this.callbackDownloadFunction);
  // }

  // private _initTable(){
  //   return `<div class='tablewrapper'>`
  // }
  // _addLineToTable(tableQuery: string, row: string){
  //   tableQuery.concat(row);
  // }
  // private _endTable(){
  //   return '</div>';
  // }
  // private generateTableRow(rowObject: Weather.ITownWeather){
  //   return `<div class="rowelement">
  //       <table class="tablerow">
  //           <tr>
  //               <td><span class="townname">${rowObject.name}</span></td>
  //               <td></td>
  //               <td></td>
  //           </tr>
  //           <tr>
  //               <td><span>Temperature: </span><span>${Math.round(rowObject.main.temp-273.15)}</span></td>
  //               <td><span>Humidity: </span><span>${rowObject.main.humidity||''}</span></td>
  //               <td><span>Wind: </span><span>${rowObject.wind.speed||''}</span></td>
  //           </tr>
  //       </table>
  //     </div>`
  // }

  // private generateTownTable(array: Weather.ITownWeather[], context: WeatherComponent){
  //   // context.townTableTemp = context._initTable();
  //   // array.forEach((value, index, array) => {
  //   //   context.townTableTemp = context.townTableTemp.concat(context.generateTableRow(value));
  //   // });
  //   // context.townTableTemp = context.townTableTemp.concat(context._endTable());
  //
  //   // context.townTableRender = String(context.townTableTemp);
  //   // context.updateTowsTable(context);
  // }

  // private updateTowsTable(context: WeatherComponent){
  //   document.querySelector('.townstable').innerHTML = context.townTableRender;
  // }


  // private callBackResponseList(data: string, context: WeatherComponent){
  //   if (data !== null){
  //     context.weatherObject = <Weather.IWeatherResponse> JSON.parse(data);
  //
  //     context.townsTable = context.weatherObject.list;
  //
  //     // context.generateTownTable(context.weatherObject.list, context);
  //     // context.updateTowsTable(context);
  //     if (context.callbackDownloadFunction !== undefined){
  //       context.callbackDownloadFunction();
  //     }
  //   } else {
  //     console.log('Cann\'t load data from weather portal!');
  //     alert('Cann\'t load data from weather portal!');
  //   }
  // }

  downloadWeatherInCircle(latitude: number, longitude: number, count: number){
    let urlTemplate: string = `http://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&cnt=${count}&appid=${this.API}`;
    // this.callbackDownloadFunction = callbackFunction;
    // RestService.sendRequest(this.typeRequest, urlTemplate, this.async, this.callBackResponseList, this, '');
    RestService.sendRequest(this.typeRequest, urlTemplate, this.async, '').then(
      (responseText: string) => {
        if (responseText !== null){
          this.weatherObject = <Weather.IWeatherResponse> JSON.parse(responseText);

          this.townsTable = this.weatherObject.list;

          // context.generateTownTable(context.weatherObject.list, context);
          // context.updateTowsTable(context);
          if (this.callbackDownloadFunction !== undefined){
            this.callbackDownloadFunction();
          }
        } else {
          console.log('Cann\'t load data from weather portal!');
          alert('Cann\'t load data from weather portal!');
        }
      }
    );
  }

  // getWeatherObject(){
  //   return this.weatherObject;
  // }

}