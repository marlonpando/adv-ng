import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from '../../models/car.model';

@Injectable({
  providedIn: 'root'
})

export class CarsService {

  constructor(private httpClient: HttpClient) { }

  all(sortColName: string, desc: boolean) {
    if (sortColName !== '' && desc) {
      return this.httpClient.get<Car[]>('http://localhost:4250/cars?_sort=' + sortColName + '&_order=desc');
    } else if (sortColName !== '') {
      return this.httpClient.get<Car[]>('http://localhost:4250/cars?_sort=' + sortColName);
    } else {
      return this.httpClient.get<Car[]>('http://localhost:4250/cars');
    }
  }

  append(car: Car) {
    return this.httpClient.post<Car>('http://localhost:4250/cars', car);
  }

  replace(car: Car) {
    return this.httpClient.put<Car>('http://localhost:4250/cars/' + car.id, car);
  }

  remove(carId: number) {
    return this.httpClient.delete<void>('http://localhost:4250/cars/' + carId);
  }

}
