import { Component, OnInit} from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, SlicePipe } from '@angular/common';
import { DatosServiceTsService } from 'src/app/Services/datos.service.ts.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sensor } from 'src/app/Interfaces/datos.interface';
import { PageEvent } from '@angular/material/paginator';
import { FilterSensoresPipe } from 'src/app/pipes/filter-sensores.pipe';
import { FilterSensoresHoraPipe } from 'src/app/pipes/filter-sensores-hora.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { WebSocketService } from 'src/app/Services/web-socket.service';
import { sensorInd } from '../../../../Interfaces/sensor.interface';


@Component({
  selector: 'app-tablas-carros-datos',
  templateUrl: './tablas-carros-datos.component.html',
  styleUrls: ['./tablas-carros-datos.component.css']
})
export class TablasCarrosDatosComponent implements OnInit{

  model!: NgbDateStruct;
  l = false
  sensor: Sensor[] = [];
  sensors: Sensor[] = [];
  pageSize = 100;
  desde = 0;
  hasta = 100;
  page = 0;
  filterPost = "";
  filteredUsers: any[] = [];
  selectedRole: Number = 0;
  seleccion = "Ult0"
  mipipe = new FilterSensoresPipe;
  mipipe2 = new FilterSensoresHoraPipe;
  fecha1 = "";
  fecha2 = "";
  cal = true;
  cal2 = true;
  start = ""
  end = ""
  sens:sensorInd[] = []
  carrito: string = ""

  constructor(private sensorService: DatosServiceTsService, public dialog: MatDialog, private fb: FormBuilder,private router:Router, private webSocketService: WebSocketService,private route: ActivatedRoute){}

  ngOnInit() {
    console.log(this.seleccion)
    this.getDatos()

    this.webSocketService.socket.on('new:datos', ()=> {
      this.getDatos2();
    })
    this.route.paramMap.subscribe(params => {
      this.carrito = params.get('carro')!;
      console.log('El id del usuario es:', this.carrito);
    });

    this.getsensores()
  }

  combinePipes(users: any[], start: string, end: string, fecha1: string, fecha2: string): any[] {
    const filterByHora = this.mipipe2.transform(users, start, end);
    const filterByFecha = this.mipipe.transform(filterByHora, fecha1, fecha2);
    return filterByFecha;
  }

  getsensores()
  {
    this.sensorService.getSensores(this.carrito).subscribe((data)=>{
      this.sens = data
    })
  }

  filter(event: any) {
    this.start = event.target.value;
    console.log(event.target.value);
    this.cal2 = false;
    this.filterData();
  }
  
  filter2(event: any) {
    if (this.start) {
      this.end = event.target.value;
      if (this.end >= this.start) {
        this.filterData();
      }
    }
  }

  regresar()
  {
    this.router.navigate(['/datos-carrito/' + this.carrito]);
  }
    

  getDatos() {
    this.sensorService.getActiveEnterprises(this.seleccion).subscribe(datos => {
      this.sensors = datos;
      this.filterData();
    });
  }
  
  getDatos2() {
    this.sensorService.getActiveEnterprises(this.seleccion).subscribe(datos => {
      this.sensors = datos;
      this.filterData();
    });
  }

  filterData() {
    let filteredData = this.sensors;
    if (this.start) {
      filteredData = this.mipipe2.transform(filteredData, this.start, this.end);
    }
    if (this.fecha1) {
      filteredData = this.mipipe.transform(filteredData, this.fecha1, this.fecha2);
    }
    this.sensor = filteredData;
  }

  cambiarPagina(e:PageEvent) {
    this.desde = e.pageIndex * e.pageSize
    this.hasta = this.desde + e.pageSize
  }

  SendDataonChange(event: any) {
    this.fecha1 = event.target.value;
    if(event.target.value == "")
    {
      this.fecha1 = event.target.value
      this.cal = true
    }
    else{
      this.cal = false;
      this.filterData();
    }
  }
  
  SendDataonChange2(event: any) {
    if (this.fecha1) {
      this.fecha2 = event.target.value;
      this.filterData();
    }
  }

  clearFilters() {
    this.fecha1 = "";
    this.fecha2 = "";
    this.start = "";
    this.end = "";
    this.sensor = this.sensors;
    this.cal = true
    this.cal2 = true
    this.getDatos(); // actualiza la tabla
  }
}