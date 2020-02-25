import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from '../components/models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private cars: Car[] = [
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

  constructor(private httpClient: HttpClient) { }

  all() {
    // return this.cars.concat();
    return this.httpClient.get<Car[]>('http://localhost:4250/cars').toPromise();
  }

  append(car: Car) {
    // car.id = Math.max(...this.cars.map(c => c.id), 0) + 1;
    // this.cars = this.cars.concat([{
    //   ...car
    // }]);
    // return this;
    return this.httpClient.post<Car>('http://localhost:4250/cars', car).toPromise();
  }

  replace(car: Car) {
    // const newCars = this.cars.concat();
    // const carIndex = this.cars.findIndex(c => c.id === car.id);
    // newCars[carIndex] = car;
    // this.cars = newCars;
    // return this;
    return this.httpClient.put<Car>('http://localhost:4250/cars/' + car.id, car).toPromise();
  }

  remove(carId: number) {
    return this.httpClient.delete<void>('http://localhost:4250/cars/' + carId).toPromise();
    // this.cars = this.cars.filter(car => car.id !== carId);
    // return this;
  }

}
