import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NgFor, NgIf } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-empresa-aceptar-empleados',
  templateUrl: './empresa-aceptar-empleados.component.html',
  standalone: true,

  imports: [NgbToastModule, NgIf,NgFor],
  styleUrls: ['./empresa-aceptar-empleados.component.css']
})
export class EmpresaAceptarEmpleadosComponent {
  show = true;
  constructor(private router:Router) { }

  solicitudesDeEmpleados()
  {
    this.router.navigate(['/aceptar-empleados']);
  }


  empresaOpciones() {
    this.router.navigate(['/mi-empresa']);
  }
  verEmpleados()
  {
    this.router.navigate(['/ver-empleados']);
  }

  carrosEmpresa()
  {
    this.router.navigate(['/autos-usuario']);
  }
}
