import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sensor } from 'src/app/Interfaces/datos.interface';
import { DatosServiceTsService } from 'src/app/Services/datos.service.ts.service';
import { WebSocketService } from 'src/app/Services/web-socket.service';

@Component({
  selector: 'app-vercarroespecifico',
  templateUrl: './vercarroespecifico.component.html',
  styleUrls: ['./vercarroespecifico.component.css']
})
export class VercarroespecificoComponent implements OnInit{

  sensor: Sensor[] = [];
  carrito: string = ""
  
  constructor(private router:Router,private sensorService: DatosServiceTsService, private webSocketService: WebSocketService,private route: ActivatedRoute) { }

  ngOnInit() {
    {
      this.getDatos()

      this.webSocketService.socket.on('new:datos', (data)=> {
        console.log(data)
        this.getActualizacion(data);
      })

      this.route.paramMap.subscribe(params => {
        this.carrito = params.get('carro')!;
      });
    }
    }

  getDatos()
  {
    this.sensorService.getLastData().subscribe(datos => {
        this.sensor = datos
    });
  }

  getActualizacion(data:Sensor)
  {
    this.sensor.forEach(dato => {
      if(dato.clave == data.clave){
        // this.getDatos()
        if(dato.valores != data.valores)
        {
          dato.valores = data.valores
        }
      }
    })
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
    this.router.navigate(['/datos-carrito']);
  }

  verTablas()
  {
    this.router.navigate(['/historial-datos/' + this.carrito]);
  }
}
