import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from 'src/app/Services/enterprise.service';
import { Enterprise } from 'src/app/Interfaces/enterprise.interface';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-solicitudes-empresas',
  templateUrl: './solicitudes-empresas.component.html',
  standalone: true,

  imports: [NgbToastModule, NgIf,NgFor,MatPaginatorModule,SlicePipe],
  styleUrls: ['./solicitudes-empresas.component.css']
})
export class SolicitudesEmpresasComponent implements OnInit {
  enterprises: Enterprise[] = [];
  show = true;
  pageSize = 5;
  desde:number = 0;
  hasta:number = 5;
  constructor(private enterpriseService: EnterpriseService) { }

  ngOnInit() {
    this.getEnterprises();
  }

  getEnterprises() {
    this.enterpriseService.getInProcessEnterprises().subscribe(enterprises => {
      this.enterprises = enterprises;
    });
  }

  cambiarPagina(e:PageEvent)
  {
    this.desde = e.pageIndex * e.pageSize
    this.hasta = this.desde + e.pageSize
  }
}
 