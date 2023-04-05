import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

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
  ngOnInit() 
  {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  InicioComponent()
  {
    this.router.navigate(['/inicio']);
  }

  VerUsuarios()
  {
    this.router.navigate(['/users']);
  }

  IniciosesionComponent()
  {
    this.router.navigate(['/login']);
  }

  TiposcarrosComponent()
  {
    this.router.navigate(['/tipos-carros']);
  }
  
  perfilUsuario()
  {
    this.router.navigate(['/profile']);
  }

 
}
