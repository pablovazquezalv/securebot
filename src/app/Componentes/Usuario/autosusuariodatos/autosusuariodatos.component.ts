import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autosusuariodatos',
  templateUrl: './autosusuariodatos.component.html',
  styleUrls: ['./autosusuariodatos.component.css']
})
export class AutosusuariodatosComponent {
  constructor(private router:Router) { }


  perfilUsuario()
  {
    this.router.navigate(['/perfil-usuario']);
  }

  empresaUsuario()
  {
    this.router.navigate(['/empresa-usuario']);
  }

  crearEmpresa()
  {
    this.router.navigate(['/crear-empresa']);
  }


}
