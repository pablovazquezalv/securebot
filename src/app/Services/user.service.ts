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

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersUrl)
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

  getUserLoggedIn() {
    return this.userLoggedIn.asObservable();
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
