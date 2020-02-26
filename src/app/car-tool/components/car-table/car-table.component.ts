import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../../models/car.model';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})

export class CarTableComponent implements OnInit {

  @Input()
  cars: Car[] = [];
  @Input()
  editCarId = -1;
  @Input()
  sortColName = '';
  desc: boolean = false;

  get sortedCars() { // for reference only
    if (this.sortColName.length > 0) {

      return this.cars.concat().sort((a: Car, b: Car) => {

        const aValue = String(a[this.sortColName]).toUpperCase();
        const bValue = String(b[this.sortColName]).toUpperCase();

        if (aValue < bValue) {
          return -1;
        } else if (aValue > bValue) {
          return 1;
        } else {
          return 0;
        }

      });

    } else {
      return this.cars;
    }
  }

  @Output()
  editCar = new EventEmitter<number>();
  @Output()
  deleteCar = new EventEmitter<number>();
  @Output()
  saveCar = new EventEmitter<Car>();
  @Output()
  cancelCar = new EventEmitter<void>();
  @Output()
  sortOrder = new EventEmitter<any>(); // what is the type?

  constructor() { }

  ngOnInit(): void {
  }

  removeCar(id) {
    this.deleteCar.emit(id);
  }

  doSort(colName: string) {
    if (this.sortColName === colName) {
      this.desc = !this.desc;
    } else {
      this.desc = false;
      this.sortColName = colName;
    }
    this.sortOrder.emit([colName, this.desc]);
  }

}
