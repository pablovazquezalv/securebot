import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autosusuariodatos',
  templateUrl: './autosusuariodatos.component.html',
  styleUrls: ['./autosusuariodatos.component.css']
})
export class AutosusuariodatosComponent {
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
