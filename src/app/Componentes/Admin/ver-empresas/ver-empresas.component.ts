import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from 'src/app/Services/enterprise.service';
import { Enterprise } from 'src/app/Interfaces/enterprise.interface';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ModalDesactivarEmpresaComponent } from '../modal-desactivar-empresa/modal-desactivar-empresa.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterCompanyPipe } from 'src/app/pipes/filter-company.pipe';

@Component({
  selector: 'app-ver-empresas',
  templateUrl: './ver-empresas.component.html',
  styleUrls: ['./ver-empresas.component.css']
})
export class VerEmpresasComponent implements OnInit {
  page = 0
  filterPost = "";
  enterprises: Enterprise[] = [];
  requests: Enterprise[] = [];
  count: number = 0;
  pageSize = 5;
  desde:number = 0;
  hasta:number = 5;
  enterpriseForm: FormGroup;
  mipipe = new FilterCompanyPipe;


  constructor(private enterpriseService: EnterpriseService, private router: Router, public dialog: MatDialog, private fb: FormBuilder) { 
    this.enterpriseForm = this.fb.group({
      company: ['', Validators.compose([Validators.required])],
    })
  }

  ngOnInit() {
    this.getEnterprises();
    this.getRequests();
  }

  empleadosEmpresa(id: number) {
    this.router.navigate(['/empleados-empresa', id]);
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
  onSubmit(values: String) {
    // console.log(values)
    this.enterpriseService.getSearchingEnterprises(values).subscribe((res) => {
      this.enterprises = res
    })
  }

  nextPage()
  {
    this.page += 5;
  }

  previousPage()
  {
    if (this.page >= 0)
      this.page -= 5;
  }

  onSearch( filterPost: string )
  {
    this.page = 0;
    this.filterPost = filterPost;
    if(this.filterPost != "")
    {
      this.enterprises = this.mipipe.transform(this.enterprises,this.filterPost)
      console.log(this.enterprises)
    }
    else{
      this.getEnterprises()
    }
  }

}
