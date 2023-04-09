import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa-ver-empleados',
  templateUrl: './empresa-ver-empleados.component.html',
  	

  styleUrls: ['./empresa-ver-empleados.component.css']
})
export class EmpresaVerEmpleadosComponent {
  
	
  constructor(private router:Router) { }

  
  solicitudesDeEmpleados()
  {
    this.router.navigate(['/aceptar-empleados']);
  }


  empresaOpciones()
  {
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
