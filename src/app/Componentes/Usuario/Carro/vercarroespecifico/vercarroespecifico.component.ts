import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sensor } from 'src/app/Interfaces/datos.interface';
import { DatosServiceTsService } from 'src/app/Services/datos.service.ts.service';

@Component({
  selector: 'app-vercarroespecifico',
  templateUrl: './vercarroespecifico.component.html',
  styleUrls: ['./vercarroespecifico.component.css']
})
export class VercarroespecificoComponent implements OnInit{

  sensor: Sensor[] = [];
  constructor(private router:Router,private sensorService: DatosServiceTsService) { }

  ngOnInit() {
    {
      this.getDatos()
    }
    }

  getDatos()
  {
    this.sensorService.getLastData().subscribe(datos => {
        this.sensor = datos
      });
  }
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

  verTablas()
  {
    this.router.navigate(['/ver-datos-carro']);
  }
}
