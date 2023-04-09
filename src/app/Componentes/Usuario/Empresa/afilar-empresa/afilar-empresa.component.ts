import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EnterpriseService } from 'src/app/Services/enterprise.service';

@Component({
  selector: 'app-afilar-empresa',
  templateUrl: './afilar-empresa.component.html',
  styleUrls: ['./afilar-empresa.component.css']
})
export class AfilarEmpresaComponent implements OnInit{
  company:String = '';
  status = 0
  enterpriseForm: FormGroup;
  companies: any[] = [];


  constructor(public companyService:EnterpriseService, private fb: FormBuilder){
    this.enterpriseForm = this.fb.group({
      company: ['', Validators.compose([Validators.required])],
    })
  }

  ngOnInit() {
      this.getCompanies()
  }

  getCompanies()
  {
    this.companyService.getActiveEnterprises().subscribe((companies)=>{
      this.companies = companies
    })
  }

  onSubmit(values: String) {
    // console.log(values)
    this.companyService.getSearchingEnterprises(values).subscribe((res) => {
      this.companies = res
      this.status = 1
    })
  }
}
