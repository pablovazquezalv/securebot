import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-empresa-ver-empleados',
  templateUrl: './empresa-ver-empleados.component.html',
  	standalone: true,

  imports: [NgbToastModule, NgIf],

  styleUrls: ['./empresa-ver-empleados.component.css']
})
export class EmpresaVerEmpleadosComponent {
  show = true;
	
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
}
