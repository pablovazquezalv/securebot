import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Services/user.service';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private userService: UserService, private location: Location) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const roles = route.data['roles'] as Array<number>;
      
      return this.userService.getRole().pipe(
        map((response:any) => {
          const rol = parseInt(response.role || '', 10);
          if(roles.includes(rol)) {
            return true;
          }

          alert('No tienes permisos para acceder a esta ruta.')
          this.location.back();
          return false;
        })
      );
  }
}
  

