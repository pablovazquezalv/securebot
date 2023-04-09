import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Enterprise } from '../Interfaces/enterprise.interface';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
  private createEnterpriseUrl = environment.API_URL + '/company';
  private getActiveEnterprisesUrl = environment.API_URL + '/companies';
  private getInProcessEnterprisesUrl = environment.API_URL + '/process/companies';

  constructor(private http: HttpClient) { }

  createEnterprise(enterprise: Enterprise): Observable<Enterprise> {
    return this.http.post<Enterprise>(this.createEnterpriseUrl, enterprise)
      .pipe(
        catchError(this.handleError)
      );
  }

  getActiveEnterprises(): Observable<Enterprise[]> {
    return this.http.get<Enterprise[]>(this.getActiveEnterprisesUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )  
  }

  getInProcessEnterprises(): Observable<Enterprise[]> {
    return this.http.get<Enterprise[]>(this.getInProcessEnterprisesUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
  }

  getSearchingEnterprises(company: String): Observable<any> {
    console.log(company)
    return this.http.post<String>("http://127.0.0.1:3333/company/search",company)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    if(error.status === 0) {
      console.error('Un error inesperado ha ocurrido:', error.error);
    } else if (error.status === 400) {
      alert('Error: ' + error.error.mensaje);
      console.error(
        `Error en el servidor: ${error.status}, \nRespuesta:`, error.error
      )
    }

    return throwError(() => new Error('Algo malo ha ocurrido; por favor, inténtelo de nuevo más tarde.'));
  }
}
