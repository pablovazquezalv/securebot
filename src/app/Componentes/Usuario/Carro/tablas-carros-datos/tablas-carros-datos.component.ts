import { Component, OnInit} from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { DatosServiceTsService } from 'src/app/Services/datos.service.ts.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sensor } from 'src/app/Interfaces/datos.interface';


@Component({
  selector: 'app-tablas-carros-datos',
  standalone: true,
	imports: [NgbDatepickerModule, FormsModule, JsonPipe],
  templateUrl: './tablas-carros-datos.component.html',
  styleUrls: ['./tablas-carros-datos.component.css']
})
export class TablasCarrosDatosComponent implements OnInit{

  model!: NgbDateStruct;
  l = false
  sensor: Sensor[] = [];
  pageSize = 5;
  desde = 0;
  hasta = 5;
  page = 0;
  filterPost = "";
  filteredUsers: any[] = [];
  selectedRole: Number = 0;
  sensores = "prueba"

  constructor(private sensorService: DatosServiceTsService, public dialog: MatDialog, private fb: FormBuilder){}

  ngOnInit() {
    this.getDatos()
  }

  getDatos()
  {
    this.sensorService.getActiveEnterprises(this.sensores).subscribe(datos => {
      this.sensor = datos;
    });
  }

	
}
