import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Car } from 'src/app/Interfaces/car.interface';
import { DatosServiceTsService } from 'src/app/Services/datos.service.ts.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-autosusuariodatos',
  templateUrl: './autosusuariodatos.component.html',
  styleUrls: ['./autosusuariodatos.component.css']
})
export class AutosusuariodatosComponent implements OnInit {
  iOwner: boolean = false;
  iAdmin: boolean = false;
  iInCharge: boolean = false;
  carros:Car[] = [];

  constructor(private router: Router, private userService: UserService, private carService:DatosServiceTsService) { }

  ngOnInit() {
    this.isOwner();
    this.isAdmin();
    this.isInCharge();
    this.getCars();
  }

  getCars()
  {
    this.carService.getCars().subscribe(data => {
      this.carros = data
    })
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

  isInCharge() {
    this.userService.isInCharge().pipe(
      map(isInCharge => {
        if(isInCharge) {
          this.iInCharge = true;
        } else {
          this.iInCharge = false;
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
