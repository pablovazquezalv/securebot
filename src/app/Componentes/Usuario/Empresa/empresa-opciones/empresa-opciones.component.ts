import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa-opciones',
  templateUrl: './empresa-opciones.component.html',
  styleUrls: ['./empresa-opciones.component.css']
})
export class EmpresaOpcionesComponent {

  mostrarCrearEmpresa: boolean = false;
  constructor(private router:Router) { }

  crearEmpresa()
  {
    this.router.navigate(['/crear-empresa']);
  }
  afiliarEmpresa()
  {
    this.router.navigate(['/afiliar-empresa']);
  }

}
