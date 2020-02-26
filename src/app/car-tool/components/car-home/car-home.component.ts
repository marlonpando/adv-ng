import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/car.model';
import { switchMap } from 'rxjs/operators';

import { CarsService} from '../../services/cars.service';
import { Observable, of } from 'rxjs';


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
  desc = false;

  updateCars = {
    next: cars => {
      this.cars = cars;
      this.editCarId = -1;
    },
    error: err => {
      console.log(err);
    }
  }

  constructor(private carsSvc: CarsService) { }

  ngOnInit(): void {
    this.refreshCars();
  }

  refreshCars(o: Observable<any> = null) {
    (!o ? of([]) : o).pipe(switchMap(() => this.carsSvc.all(this.sortColName, this.desc))).subscribe(this.updateCars)
  }

  removeCar(carId) {
    this.refreshCars(this.carsSvc.remove(carId));
  }

  addCar(car: Car) {
    this.refreshCars(this.carsSvc.append(car));
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  setSortOrder(array: any) {
    this.sortColName = array[0];
    this.desc = array[1];
    this.refreshCars();
  }

  doReplaceCar(car: Car) {
    this.refreshCars(this.carsSvc.replace(car));
  }

  doCancelCar() {
    this.editCarId = -1;
  }

}
