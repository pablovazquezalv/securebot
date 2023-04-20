import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-autosusuariodatos',
  templateUrl: './autosusuariodatos.component.html',
  styleUrls: ['./autosusuariodatos.component.css']
})
export class AutosusuariodatosComponent implements OnInit {
  iOwner: boolean = false;
  iAdmin: boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.isOwner();
    this.isAdmin();
  }

  isOwner() {
    this.userService.isOwner().pipe(
      map(isOwner => {
        if(isOwner) {
          this.iOwner = true;
        } else {
          this.iOwner = false;
        }
      })
    ).subscribe();
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
    ).subscribe();
  }
  
  solicitudesDeEmpleados() {
    this.router.navigate(['/solicitudes-empleados']);
  }

  empresaOpciones() {
    this.router.navigate(['/mi-empresa']);
  }

  verEmpleados() {
    this.router.navigate(['/empleados']);
  }

  carrosEmpresa() {
    this.router.navigate(['/autos-usuario']);
  }

  verSensores() {
    this.router.navigate(['/ver-carro-especifico']);
  }

  crearCarro() {
    this.router.navigate(['/crear-carro']);
  }

}
