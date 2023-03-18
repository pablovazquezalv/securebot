import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  isLoggedIn$: Observable<boolean> | undefined;

  constructor(private router:Router,private authService: AuthService) 
  {
  }
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  IniciosesionComponent(){
    this.router.navigate(['/inicio-sesion']);
  }
}
