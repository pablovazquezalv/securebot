import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-empresas',
  templateUrl: './ver-empresas.component.html',
  styleUrls: ['./ver-empresas.component.css']
})
export class VerEmpresasComponent {

  constructor(private router:Router) { }


  empleadosEmpresa(){
    this.router.navigate(['/empleados-empresa']);
  }

}
