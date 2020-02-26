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
      return this.httpClient.get<Car[]>('http://localhost:4250/cars?_sort=' + sortColName + '&_order=desc').toPromise();
    } else if (sortColName !== '') {
      return this.httpClient.get<Car[]>('http://localhost:4250/cars?_sort=' + sortColName).toPromise();
    } else {
      return this.httpClient.get<Car[]>('http://localhost:4250/cars').toPromise();
    }
  }

  append(car: Car) {
    return this.httpClient.post<Car>('http://localhost:4250/cars', car).toPromise();
  }

  replace(car: Car) {
    return this.httpClient.put<Car>('http://localhost:4250/cars/' + car.id, car).toPromise();
  }

  remove(carId: number) {
    return this.httpClient.delete<void>('http://localhost:4250/cars/' + carId).toPromise();
  }

}
