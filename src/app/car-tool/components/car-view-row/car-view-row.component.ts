import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '.car-view-row',
  templateUrl: './car-view-row.component.html',
  styleUrls: ['./car-view-row.component.css']
})
export class CarViewRowComponent implements OnInit {

  @Input() car;
  @Output() deleteCar = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  doDeleteCar() {
    this.deleteCar.emit(this.car.id);
  }

}
