import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from 'src/app/Services/enterprise.service';
import { Enterprise } from 'src/app/Interfaces/enterprise.interface';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf, SlicePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalRechazarSolicitudEmpresaComponent } from '../modal-rechazar-solicitud-empresa/modal-rechazar-solicitud-empresa.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitudes-empresas',
  templateUrl: './solicitudes-empresas.component.html',
  standalone: true,

  imports: [NgbToastModule, NgIf, NgFor, MatPaginatorModule, SlicePipe],
  styleUrls: ['./solicitudes-empresas.component.css']
})
export class SolicitudesEmpresasComponent implements OnInit {
  enterprises: Enterprise[] = [];
  show = true;
  pageSize = 5;
  desde:number = 0;
  hasta:number = 5;
  constructor(private enterpriseService: EnterpriseService, public dialog: MatDialog,private router:Router) { }

  ngOnInit() {
    this.getEnterprises();
  }

  getEnterprises() {
    this.enterpriseService.getInProcessEnterprises().subscribe((enterprises: any) => {
      this.enterprises = enterprises.data;
    });
  }

  acceptEnterprise(id: number) {
    this.enterpriseService.acceptEnterprise(id).subscribe(() => location.reload());
  }

  openModal(id: number) 
  {
    const dialogRef = this.dialog.open(ModalRechazarSolicitudEmpresaComponent, {
      width: '448px',
      height: 'auto',
      data: { id: id }
    });
  }

  regresarVerEmpresas()
  {
    this.router.navigate(['/empresas']);
  }

  cambiarPagina(e:PageEvent)
  {
    this.desde = e.pageIndex * e.pageSize
    this.hasta = this.desde + e.pageSize
  }
}
 