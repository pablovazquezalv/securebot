import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EnterpriseService } from 'src/app/Services/enterprise.service';

@Component({
  selector: 'app-buscador-empresas',
  templateUrl: './buscador-empresas.component.html',
  styleUrls: ['./buscador-empresas.component.css']
})
export class BuscadorEmpresasComponent {
  companies: any[] = [];

  constructor(public companyService:EnterpriseService){
  }

  getCompanies()
  {
    this.companyService.getActiveEnterprises().subscribe((companies)=>{
      this.companies = companies
    })
    
  }
}
