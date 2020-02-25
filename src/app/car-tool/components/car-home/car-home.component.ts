import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car.model';

import { CarsService} from '../../services/cars.service';


@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  cars: Car[] = [];
  editCarId = -1;
  headerText = 'Car Tool';
  sortColName = '';

  constructor(private carsSvc: CarsService) { }

  ngOnInit(): void {

    this.carsSvc.all(this.sortColName).then(cars => {
      this.cars = cars;
    });

    // this.cars = this.carsSvc.all();
  }

  refreshCars() {
    return this.carsSvc.all(this.sortColName).then(cars => {
      this.cars = cars;
    });
  }

  removeCar(carId) {
    // this.cars = this.carsSvc.remove(carId).all();
    this.carsSvc
      .remove(carId)
      .then(() => this.refreshCars());
    this.editCarId = -1;
  }

  addCar(car: Car) {
    // this.cars = this.carsSvc.append(car).all();
    this.carsSvc
      .append(car)
      .then(() => this.refreshCars());
    this.editCarId = -1;
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  setSortColName(colName: string) {
    this.sortColName = colName;
    this.refreshCars();
    // this.carsSvc.setSortColName(colName);
  }

  doReplaceCar(car: Car) {
    // this.cars = this.carsSvc.replace(car).all();
    this.carsSvc
      .replace(car)
      .then(() => this.refreshCars());
    this.editCarId = -1;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

}
