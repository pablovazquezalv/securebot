import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from 'src/app/Services/enterprise.service';
import { Enterprise } from 'src/app/Interfaces/enterprise.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-empresas',
  templateUrl: './ver-empresas.component.html',
  styleUrls: ['./ver-empresas.component.css']
})
export class VerEmpresasComponent implements OnInit {
  enterprises: Enterprise[] = [];
  constructor(private enterpriseService: EnterpriseService, private router: Router) { }

  ngOnInit() {
    this.getEnterprises();
  }

  empleadosEmpresa() {
    this.router.navigate(['/empleados-empresa']);
  }

  getEnterprises() {
    this.enterpriseService.getActiveEnterprises().subscribe(enterprises => {
      this.enterprises = enterprises;
    });
  }
}
