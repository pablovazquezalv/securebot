import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-empresa-opciones',
  templateUrl: './empresa-opciones.component.html',
  styleUrls: ['./empresa-opciones.component.css']
})
export class EmpresaOpcionesComponent implements OnInit {
  hasEnterprise: boolean = false;
  isInProcess: boolean = false;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.hasCompany();
    this.isCompanyInProcess();
  }

  hasCompany() {
    this.userService.hasEnterprise().pipe(
      map(hasCompany => {
        if(hasCompany) {
          this.hasEnterprise = true;
        } else {
          this.hasEnterprise = false;
        }
      })).subscribe();
  }

  isCompanyInProcess() {
    this.userService.isCompanyInProcess().pipe(
      map(isCompanyInProcess => {
        if(isCompanyInProcess) {
          this.isInProcess = true;
        } else {
          this.isInProcess = false;
        }
      })).subscribe();
  }

  crearEmpresa() {
    this.router.navigate(['/crear-empresa']);
  }

  afiliarEmpresa() {
    this.router.navigate(['/afiliar-empresa']);
  }
  
  solicitudesDeEmpleados() {
    this.router.navigate(['/aceptar-empleados']);
  }
  
  empresaOpciones() {
    this.router.navigate(['/mi-empresa']);
  }
  verEmpleados() {
    this.router.navigate(['/ver-empleados']);
  }
  carrosEmpresa() {
    this.router.navigate(['/autos-usuario']);
  }
}
