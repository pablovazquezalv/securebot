import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Sensor } from '../Interfaces/datos.interface';
import { Car } from '../Interfaces/car.interface';
import { sensorInd } from '../Interfaces/sensor.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosServiceTsService {

  constructor(private http: HttpClient) { }

  getActiveEnterprises(sensor:string): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(environment.API_URL + "/read/" + sensor)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )  
  }

  getLastData(): Observable<any> {
    return this.http.get<any>(environment.API_URL + "/ultimoDato")
      .pipe(
        retry(3),
        catchError(this.handleError)
      )  
  }

  getLast(clave:string): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(environment.API_URL + "/ultimoDatoSensor/" + clave)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )  
  }

  createCar(car: Car): Observable<Car> {
    return this.http.post<Car>(environment.API_URL + "/crearCarro", car)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(environment.API_URL + "/verCarros")
      .pipe(
        retry(3),
        catchError(this.handleError)
      )  
  }

  getSensores(carro:string): Observable<sensorInd[]> {
    return this.http.get<sensorInd[]>(environment.API_URL + "/verSensores" + "/" + carro)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )  
  }

  getActiveEnterprisesArray(sensor: string[]): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(environment.API_URL + "/read/" + sensor)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )  
  }

  updateCar(car: Car, id: number): Observable<Car> {
    return this.http.put<Car>(environment.API_URL + "/upCarro/" + id, car)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteCar(id: number): Observable<Car> {
    return this.http.delete<Car>(environment.API_URL + "/delCarro/" + id)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  private handleError(error: HttpErrorResponse) {
    if(error.status === 0) {
      console.error('Un error inesperado ha ocurrido:', error.error);
    } else if (error.status === 400) {
      //alert('Error: ' + error.error.message);
      console.error(
        `Error en el servidor: ${error.status}, \nRespuesta:`, error.error
      )
    }

    return throwError(() => new Error('Algo malo ha ocurrido; por favor, inténtelo de nuevo más tarde.'));
  }
}
