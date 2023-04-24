import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Services/user.service';
import { Location } from '@angular/common';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HasEnterpriseGuard implements CanActivate {
  constructor(private userService: UserService, private location: Location) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.userService.hasEnterprise().pipe(
        (map((res: any) => {
          if(res == true){
            alert('Ya perteneces a una empresa.')
            this.location.back();
            return false;
          } else {
            return true;
          }
        }
      )));
  }
}
