import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from 'src/app/Services/enterprise.service';
import { Enterprise } from 'src/app/Interfaces/enterprise.interface';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ModalDesactivarEmpresaComponent } from '../modal-desactivar-empresa/modal-desactivar-empresa.component';

@Component({
  selector: 'app-ver-empresas',
  templateUrl: './ver-empresas.component.html',
  styleUrls: ['./ver-empresas.component.css']
})
export class VerEmpresasComponent implements OnInit {
  enterprises: Enterprise[] = [];
  requests: Enterprise[] = [];
  count: number = 0;
  pageSize = 5;
  desde:number = 0;
  hasta:number = 5;
  tieneSolicitud:boolean = false;
  constructor(private enterpriseService: EnterpriseService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.getEnterprises();
    this.getRequests();
  }

  empleadosEmpresa() {
    this.router.navigate(['/empleados-empresa']);
  }

  getEnterprises() {
    this.enterpriseService.getActiveEnterprises().subscribe(enterprises => {
      this.enterprises = enterprises;
    });
  }

  getRequests() {
    this.enterpriseService.getInProcessEnterprises().subscribe((enterprises: any) => {
      this.count = enterprises.count;
    });
  }

  openModal(id: number) {
    const dialogRef = this.dialog.open(ModalDesactivarEmpresaComponent, {
      width: '448px',
      height: 'auto',
      data: { id: id }
    });
  }

  verSolicitudes() {
    this.router.navigate(['/solicitudes-empresa']);
  }
  
  cambiarPagina(e:PageEvent) {
    this.desde = e.pageIndex * e.pageSize
    this.hasta = this.desde + e.pageSize
  }
}
