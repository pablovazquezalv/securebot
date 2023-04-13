import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnterpriseService } from 'src/app/Services/enterprise.service';
import { Enterprise } from 'src/app/Interfaces/enterprise.interface';

@Component({
  selector: 'app-crearempresa',
  templateUrl: './crearempresa.component.html',
  styleUrls: ['./crearempresa.component.css']
})

@Injectable()
export class CrearempresaComponent {
  errorMessage = '';
  show = true;
  enterpriseForm: FormGroup;
  enterprise?: Enterprise;

  constructor(private enterpriseService: EnterpriseService, private fb: FormBuilder) {
    this.enterpriseForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')])],
      activity: ['', Validators.required],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]+$')])],
      calle: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      numero: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
      colonia: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cp: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(5)])],
      ciudad: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      estado: ['', Validators.required],
    });
  }

  onSubmit(values: Enterprise) {
    if (this.enterpriseForm.valid) {
      this.enterpriseService.createEnterprise(values).subscribe((response:any) => {
        location.assign('/mi-empresa')
      }, (error) => {
        this.errorMessage = "El correo electrónico ya se encuentra en uso.";
        this.show = true;
        console.log("Error: ", this.errorMessage);
      });
    };
  }
}
