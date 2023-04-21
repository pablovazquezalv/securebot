import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { User } from '../Interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registerUrl = environment.API_URL + '/register';
  private loginUrl = environment.API_URL + '/login';
  private logoutUrl = environment.API_URL + '/logout';
  private getUsersUrl = environment.API_URL + '/users';
  private userUrl = environment.API_URL + '/user';
  private changeStatusUrl = environment.API_URL + '/user/active';
  private changeRoleUrl = environment.API_URL + '/change/role';
  private getRoleUrl = environment.API_URL + '/user/role';
  private isAdminUrl = environment.API_URL + '/user/admin';
  private isOwnerUrl = environment.API_URL + '/user/owner';
  private isInChargeUrl = environment.API_URL + '/user/charge';
  private updateNamesUrl = environment.API_URL + '/user/names';
  private updatePasswordUrl = environment.API_URL + '/user/password';
  private updatePhoneUrl = environment.API_URL + '/user/phone';
  private updateEmailUrl = environment.API_URL + '/user/email';
  private updateDataUrl = environment.API_URL + '/user/data';
  private resendCodeUrl = environment.API_URL + '/user/code';
  private recoverPasswordUrl = environment.API_URL + '/recover/password';
  private userComapnyUrl = environment.API_URL + '/user/company';
  private userRequestUrl = environment.API_URL + '/user/request';
  private companyUserUrl = environment.API_URL + '/company/user';
  private getEmployeesUrl = environment.API_URL + '/employees';
  private acceptEmployeeUrl = environment.API_URL + '/accept/user';
  private rejectEmployeeUrl = environment.API_URL + '/reject/user';
  private disableEmployeeUrl = environment.API_URL + '/disable/user';
  private changePuestoUrl = environment.API_URL + '/change/puesto';

  private userLoggedIn = new Subject<boolean>();
  private signedRoute?: string;

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.registerUrl, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  setSignedRoute(route: string) {
    this.signedRoute = route;
    localStorage.setItem('signedRoute', route);
  }

  getSignedRoute(): any {
    this.signedRoute = localStorage.getItem('signedRoute')?.toString();
    return this.signedRoute;
  }

  verifyPhone(code: JSON) {
    const route = this.getSignedRoute();
    return this.http.post(route, code)
      .pipe(
        catchError(this.handleError)
      );
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(this.loginUrl, user)
      .pipe(
        tap(() => {
          this.userLoggedIn.next(true)
        }),
        catchError(this.handleError)
      );
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.getUsersUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  getUsersAI(st: Number, rol: Number): Observable<any> {
    const ruta = environment.API_URL + '/usersAI' + '/' + st + '/' + rol
    console.log(ruta)
    return this.http.get<any>(ruta)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.userUrl + '/' + id)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  getSearchingUsers(user: String): Observable<any> {
    console.log(user)
    return this.http.post<String>(environment.API_URL + "/user/search",user)
      .pipe(
        catchError(this.handleError)
      )
  }

  changeStatus(id: number) {
    const user = this.getUser(id);
    return this.http.put(this.changeStatusUrl + '/' + id, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  changeRole(user: User, id: number) {
    return this.http.put(this.changeRoleUrl + '/' + id, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  getRole() {
    return this.http.get<User>(this.getRoleUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  isAdmin() {
    return this.http.get<User>(this.isAdminUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  isOwner() {
    return this.http.get<User>(this.isOwnerUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  isInCharge() {
    return this.http.get<User>(this.isInChargeUrl)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getToken() {
    return this.http.get(this.userUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  logout(): Observable<User> {
    return this.http.get<User>(this.logoutUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  updateNames(user: User) {
    return this.http.put(this.updateNamesUrl, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  updatePassword(user: User) {
    return this.http.put(this.updatePasswordUrl, user)
      .pipe(
        catchError(this.handleError)
      );     
  }

  updatePhone(data: JSON) {
    return this.http.put(this.updatePhoneUrl, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateEmail(data: JSON) {
    return this.http.put(this.updateEmailUrl, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  incorrectDataUser(user: User, id: number) {
    return this.http.put(this.updateDataUrl + '/' + id, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  resendCode(id: number) {
    return this.http.get(this.resendCodeUrl + '/' + id)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  recoverPassword(data: JSON) {
    return this.http.post(this.recoverPasswordUrl, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  hasEnterprise() {
    return this.http.get(this.userComapnyUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  isCompanyInProcess() {
    return this.http.get(this.userRequestUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  companyWithUser() {
    return this.http.get(this.companyUserUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  getEmployees(): Observable<User[]> {
    return this.http.get<User[]>(this.getEmployeesUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  getEmployeesRequest(): Observable<User[]> {
    return this.http.get<User[]>(this.getEmployeesUrl + '/request')
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  acceptEmployee(id: number) {
    return this.http.put(this.acceptEmployeeUrl + '/' + id, "")
      .pipe(
        catchError(this.handleError)
      );
  }

  rejectEmployee(id: number) {
    return this.http.put(this.rejectEmployeeUrl + '/' + id, "")
      .pipe(
        catchError(this.handleError)
      );
  }

  disableEmployee(id: number, user: User) {
    return this.http.put(this.disableEmployeeUrl + '/' + id, user)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  getEmployeesWithParams(id: number) {
    return this.http.get(this.getEmployeesUrl + '/' + id)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  changePuesto(id: number) {
    return this.http.put(this.changePuestoUrl + '/' + id, "")
      .pipe(
        catchError(this.handleError)
      );
  }

  verifyToken(token:string){
    return this.http.get(this.userUrl, { headers: {'Authorization': token} })
   }

  getUserLoggedIn() {
    return this.userLoggedIn.asObservable();
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

    return throwError(() => new Error(error.error.message));
  }
}
