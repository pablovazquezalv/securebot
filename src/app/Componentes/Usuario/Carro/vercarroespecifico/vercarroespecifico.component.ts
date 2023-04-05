import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vercarroespecifico',
  templateUrl: './vercarroespecifico.component.html',
  styleUrls: ['./vercarroespecifico.component.css']
})
export class VercarroespecificoComponent {


  constructor(private router:Router) { }


  perfilUsuario()
  {
    this.router.navigate(['/profile']);
  }

  empresaUsuario()
  {
    this.router.navigate(['/empresa-usuario']);
  }

  crearEmpresa()
  {
    this.router.navigate(['/crear-empresa']);
  }

  verCarroEspecifico()
  {
    this.router.navigate(['/ver-carro-especifico']);
  }
}
