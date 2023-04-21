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

  constructor(private sensorService: DatosServiceTsService, public dialog: MatDialog, private fb: FormBuilder){}

  ngOnInit() {
    console.log(this.seleccion)
    this.getDatos()
  }

  filter(event: any) {
    this.start = event.target.value;
    console.log(event.target.value);
    this.cal2 = false;
    if(event.target.value != "")
    {
      this.sensor = this.mipipe2.transform(this.sensor,this.start,this.end)
    }
    else{
      this.getDatos()
      this.end = ""
      this.cal2 = true
    }
  }

  filter2(event: any) {
    if(this.start != "")
    {
      this.end = event.target.value;
      if(this.end >= this.start)
      {
        if(event.target.value != "")
        {
          this.sensor = this.mipipe2.transform(this.sensor,this.start,this.end)
        }
        else{
          this.sensor = this.mipipe2.transform(this.sensor,this.start,this.end)
        }
      }
    }
  }

  getDatos()
  {
    this.fecha1 = ""
    this.fecha2 = ""
    this.start = ""
    this.end = ""
    this.cal = true
    this.cal2 = true
    this.sensorService.getActiveEnterprises(this.seleccion).subscribe(datos => {
      this.sensor = datos;
      this.sensors = datos;
    });
  }

  cambiarPagina(e:PageEvent) {
    this.desde = e.pageIndex * e.pageSize
    this.hasta = this.desde + e.pageSize
  }

  SendDataonChange(event: any) {
    this.fecha1 = event.target.value;
    console.log(event.target.value);
    this.cal = false;
    if(event.target.value != "")
    {
      this.sensor = this.mipipe.transform(this.sensor,this.fecha1,this.fecha2)
    }
    else{
      this.getDatos()
      this.fecha2 = ""
      this.cal = true
    }
  }

  SendDataonChange2(event: any) {
    if(this.fecha1 != "")
    {
      this.fecha2 = event.target.value;
      if(event.target.value != "")
      {
        this.sensor = this.mipipe.transform(this.sensor,this.fecha1,this.fecha2)
      }
      else{
        this.sensor = this.mipipe.transform(this.sensor,this.fecha1,this.fecha2)
      }
    }
  }
  
	
}
