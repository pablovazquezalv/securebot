import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from 'src/app/Services/enterprise.service';
import { Enterprise } from 'src/app/Interfaces/enterprise.interface';

@Component({
  selector: 'app-solicitudes-empresas',
  templateUrl: './solicitudes-empresas.component.html',
  styleUrls: ['./solicitudes-empresas.component.css']
})
export class SolicitudesEmpresasComponent implements OnInit {
  enterprises: Enterprise[] = [];
  constructor(private enterpriseService: EnterpriseService) { }

  ngOnInit() {
    this.getEnterprises();
  }

  getEnterprises() {
    this.enterpriseService.getInProcessEnterprises().subscribe(enterprises => {
      this.enterprises = enterprises;
    });
  }
}
