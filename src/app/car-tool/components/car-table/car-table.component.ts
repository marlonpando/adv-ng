import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  constructor() { }

  @Input() cars;
  @Output() deleteCar = new EventEmitter<string>();

  ngOnInit(): void {
  }

  removeCar(id) {
    this.deleteCar.emit(id);
  }

}
