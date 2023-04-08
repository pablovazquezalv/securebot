import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  iAdmin: boolean = false;
  userLoggedIn: boolean = false;

  ngOnInit() {
    this.isAdmin();
    this.getToken();

    const iAdmin = localStorage.getItem('iAdmin');
    const userLoggedIn = localStorage.getItem('userLoggedIn');

    if (iAdmin !== null) {
      this.iAdmin = iAdmin === 'true';
    }

    if (userLoggedIn !== null) {
      this.userLoggedIn = userLoggedIn === 'true';
    }

    this.userService.getUserLoggedIn().subscribe(loggedIn => {
      this.userLoggedIn = loggedIn;
      localStorage.setItem('userLoggedIn', this.userLoggedIn.toString());
    });
  }

  InicioComponent() {
    this.router.navigate(['/inicio']);
  }

  VerUsuarios() {
    this.router.navigate(['/users']);
  }

  verEmpresas() {
    this.router.navigate(['/empresas']);
  }

  IniciosesionComponent() {
    this.router.navigate(['/login']);
  }

  TiposcarrosComponent() {
    this.router.navigate(['/conocenos']);
  }
  
  perfilUsuario() {
    this.router.navigate(['/profile']);
  }

  empresaOpciones() {
    this.router.navigate(['/mi-empresa']);
  }

  solicitudesEmpresa()
{
  this.router.navigate(['/solicitudes-empresa']);
}   

  isAdmin() {
    this.userService.isAdmin().pipe(
      map(isAdmin => {
        if(isAdmin) {
          this.iAdmin = true;
        } else {
          this.iAdmin = false;
        }
      })
    ).subscribe(response => {
      localStorage.setItem('iAdmin', this.iAdmin.toString());
      console.log(response);
    });
  }

  getToken() {
    this.userService.getToken().pipe(
      map(token => {
        if(token) {
          this.userLoggedIn = true;
          localStorage.setItem('userLoggedIn', this.userLoggedIn.toString());
        } else {
          this.userLoggedIn = false;
        }
      }
    )).subscribe(response => console.log(response));
  }

  logout() {
    this.userService.logout().subscribe(() => location.assign('/inicio'));
    localStorage.removeItem('token');
    localStorage.removeItem('iAdmin');
    localStorage.removeItem('userLoggedIn');
  }
}
