import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car.model';


@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = 'Car Tool';

  cars: Car[] = [
    {
      id: 1,
      make: 'Honda',
      model: 'Civic',
      year: 2016,
      color: 'Black',
      price: 20000
    },
    {
      id: 2,
      make: 'Toyota',
      model: 'Camry',
      year: 2018,
      color: 'Red',
      price: 22000
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  removeCar(id) {
    this.cars = this.cars.filter(car => car.id !== id);
  }

  addCar(car: Car) {
    car.id = Math.max(...this.cars.map(c => c.id), 0) + 1;
    this.cars = this.cars.concat([{
      ...car
    }]);
  }

}
