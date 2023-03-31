import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresausuario',
  templateUrl: './empresausuario.component.html',
  styleUrls: ['./empresausuario.component.css']
})
export class EmpresausuarioComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
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

  carrosUsuario()
  {
    this.router.navigate(['/autos-usuario']);
  }
}
