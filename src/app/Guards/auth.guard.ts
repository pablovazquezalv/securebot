import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private tokenValid:boolean = true
  constructor(private userService: UserService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token')
      if(token){
        this.userService.verifyToken(token).subscribe(
        ()=>{
        this.tokenValid = true
        },
        ()=> { this.userService.logout().subscribe(), localStorage.removeItem('token'), localStorage.removeItem('iAdmin'), localStorage.removeItem('userLoggedIn'), location.assign('/login')
        alert('Tu sesión ha expirado o tu token es inválido.');
        this.tokenValid = false
        })
      }

      return this.tokenValid
  }
}
