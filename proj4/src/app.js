import $ from 'jquery';
import { Car } from './classes/car.js';
import { Drone } from './classes/drone.js';
import { DataError } from './services/data-error.js';
import { fleet } from './fleet-data.js'
import { FleetDataService } from './services/fleet-data-service.js';
import { Button } from './ui/button.js';
import { Image } from './ui/image.js';
import { TitleBar } from './ui/title-bar.js'
import { DataTable } from './ui/data-table.js';
import { GoogleMap } from './ui/google-map.js';


// let tb = new TitleBar('Bharat');
// tb.addLink('Bharat', '');
// tb.addLink('Karan', '');
// tb.addLink('Parth', '');
// tb.appendToElement($('body'));

// let headers = "License Make Model Miles".split(' ');
let dataService = new FleetDataService();
dataService.loadData(fleet);
// let dt = new DataTable(headers, dataService.cars);
// dt.appendToElement($('body'));

// let i = new Image('image/img.jpg');
// i.appendToElement($('body'));

// let b = new Button('Click Me');
// b.appendToElement($('body'));

let centerOfMap = { lat: 40.775596, lng: -73.974615 };
let map = new GoogleMap(centerOfMap, dataService.cars);
map.appendToElement($('body'));


// google map api key =   AIzaSyDGiwi0xD3tVJaiW48QNE0zL795T8NHON4      AIzaSyDv0B2eqeeaQA0WtppOkHK2xq0GpU2RPL4