import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa-aceptar-empleados',
  templateUrl: './empresa-aceptar-empleados.component.html',
  styleUrls: ['./empresa-aceptar-empleados.component.css']
})
export class EmpresaAceptarEmpleadosComponent {

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
