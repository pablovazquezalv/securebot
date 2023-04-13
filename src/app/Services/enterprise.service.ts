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
  private getInactiveEnterprisesUrl = environment.API_URL + '/inCompanies';
  private getInProcessEnterprisesUrl = environment.API_URL + '/process/companies';
  private updateCompanyUrl = environment.API_URL + '/update/company';
  private addressCompanyUrl = environment.API_URL + '/address/company';
  private acceptCompanyUrl = environment.API_URL + '/accept/company';
  private rejectCompanyUrl = environment.API_URL + '/reject/company';
  private disableCompanyUrl = environment.API_URL + '/disable/company';

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

  getInactiveEnterprises(): Observable<Enterprise[]> {
    return this.http.get<Enterprise[]>(this.getInactiveEnterprisesUrl)
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

  updateCompany(enterprise: Enterprise, id: number) {
    return this.http.put(this.updateCompanyUrl + '/' + id, enterprise)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateAddressCompany(enterprise: Enterprise, id: number) {
    return this.http.put(this.addressCompanyUrl + '/' + id, enterprise)
      .pipe(
        catchError(this.handleError)
      );
  }

  getSearchingEnterprises(company: String): Observable<any> {
    console.log(company)
    return this.http.post<String>(environment.API_URL + "/company/search",company)
      .pipe(
        catchError(this.handleError)
      )
  }

  addEnterprise(company: Number) {
    return this.http.post(environment.API_URL + '/user/company/' + company, "")
      .pipe(
        catchError(this.handleError)
      );
  }

  acceptEnterprise(id: number) {
    return this.http.put(this.acceptCompanyUrl + '/' + id, "")
      .pipe(
        catchError(this.handleError)
      );
  }

  rejectEnterprise(id: number, enterprise: Enterprise) {
    return this.http.put(this.rejectCompanyUrl + '/' + id, enterprise)
      .pipe(
        catchError(this.handleError)
      );
  }

  disableEnterprise(id: number, enterprise: Enterprise) {
    return this.http.put(this.disableCompanyUrl + '/' + id, enterprise)
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
