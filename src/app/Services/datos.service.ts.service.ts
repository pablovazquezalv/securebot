import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Sensor } from '../Interfaces/datos.interface';
import { Car } from '../Interfaces/car.interface';

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

  getLastData(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(environment.API_URL + "/ultimoDato")
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


  getActiveEnterprisesArray(sensor: string[]): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(environment.API_URL + "/read/" + sensor)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )  
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
