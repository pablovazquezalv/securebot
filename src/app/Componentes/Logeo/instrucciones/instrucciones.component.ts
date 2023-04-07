import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.css']
})
export class InstruccionesComponent {

  constructor(private router: Router) { }

  irCodigoTel() {
    this.router.navigate(['code-verify']);
  }
  
  correoEquivocado() {
    this.router.navigate(['registrarse']);
  }
}
