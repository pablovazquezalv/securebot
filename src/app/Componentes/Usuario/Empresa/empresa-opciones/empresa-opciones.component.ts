import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { Enterprise } from 'src/app/Interfaces/enterprise.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-empresa-opciones',
  templateUrl: './empresa-opciones.component.html',
  styleUrls: ['./empresa-opciones.component.css']
})
export class EmpresaOpcionesComponent implements OnInit {
  hasEnterprise: boolean = false;
  isInProcess: boolean = false;

  enterprise: Enterprise = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    calle: '',
    numero: '',
    colonia: '',
    cp: '',
    ciudad: '',
    estado: '',
    activity: '',
  };

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.hasCompany();
    this.isCompanyInProcess();
    this.getEnterprise();
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

  getEnterprise() {
    this.userService.companyWithUser().subscribe((response: any) => {
      if(response.status == 200) {
        this.enterprise = response.data;
      }
    })
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
