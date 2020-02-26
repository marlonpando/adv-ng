import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../../models/car.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  @Input() buttonText = 'Add car';
  @Output() submitCar = new EventEmitter<Car>();
  carForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.carForm = this.fb.group({
      make: '',
      model: '',
      year: null,
      color: '',
      price: null
    });
  }

  doSubmitCar(car: Car) {
    this.submitCar.emit(car);
    this.carForm.reset();
  }

}
