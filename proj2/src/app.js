import { Dron } from './dron.js';
import { Car } from './car.js';
import { fleet } from '../service/data.js'
import { DataService } from '../service/data-sevice.js'

let dataservice = new DataService();
dataservice.loadData(fleet);

// let cars = dataservice.getCarSortByLicense();

let cars = dataservice.filterCarsByMake('U');

for (let car of cars)
    console.log(car.license);

// let car = dataservice.getCarByLicence('AT4000');
// console.log(car);

// for (let car of dataservice.cars)
//     console.log(car.license);

// for (let dron of dataservice.drons)
//     console.log(dron.model);

// for (let e of dataservice.errors)
//     console.log(e.message, e);
