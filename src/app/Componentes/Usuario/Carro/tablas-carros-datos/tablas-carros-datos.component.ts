import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tablas-carros-datos',
  standalone: true,
	imports: [NgbDatepickerModule, FormsModule, JsonPipe],
  templateUrl: './tablas-carros-datos.component.html',
  styleUrls: ['./tablas-carros-datos.component.css']
})
export class TablasCarrosDatosComponent {

  model!: NgbDateStruct;


  constructor(private router:Router)
  {
    
  }

  verUltimos( )
  {
    this.router.navigate(['/ver-carro-especifico']);
  }
	
}
