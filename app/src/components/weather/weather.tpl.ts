export const template: string = `
<div>
    <div>Weather in towns: </div>
                
        
    <!--<div class="townstable">$ {this.townTableRender}</div>-->
    
    <!-- <div class="rowelement">        
        <table class="tablerow">
            <tr>
                <td><span class="townname">$ {rowObject.name}</span></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td><span>Temperature: </span><span>$ {Math.round(rowObject.main.temp-273.15)}</span></td>
                <td><span>Humidity: </span><span>$ {rowObject .main.humidity||''}</span></td>
                <td><span>Wind: </span><span>$ {rowObject.wind.speed||''}</span></td>
            </tr>
        </table>        
    </div>
    -->
    
    <ul>
        <li *ngFor="town in townsTable">
            <table class="tablerow">
            <tr>
                <td><span class="townname">{{town.name}}</span></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td><span>Temperature: </span><span>{{Math.round(town.temp-273.15)}}</span></td>
                <td><span>Humidity: </span><span>{{town.humidity||''}}</span></td>
                <td><span>Wind: </span><span>{{town.wind.speed||''}}</span></td>
            </tr>
        </table>
        </li>
    </ul>
    
</div>
  `;