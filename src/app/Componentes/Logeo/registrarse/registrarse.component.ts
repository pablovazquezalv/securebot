import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {

  constructor(private router:Router) { }

  iniciarSesion()
  {
    this.router.navigate(['/inicio-sesion']);
  }

  codigoTel()
  {
    this.router.navigate(['/codigo-telefono']);
  }

}
