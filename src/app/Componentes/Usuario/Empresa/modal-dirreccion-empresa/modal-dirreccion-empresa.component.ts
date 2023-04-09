import { Component, Injectable, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnterpriseService } from 'src/app/Services/enterprise.service';
import { Enterprise } from 'src/app/Interfaces/enterprise.interface';

@Component({
  selector: 'app-modal-dirreccion-empresa',
  templateUrl: './modal-dirreccion-empresa.component.html',
  styleUrls: ['./modal-dirreccion-empresa.component.css']
})

@Injectable()
export class ModalDirreccionEmpresaComponent implements OnInit {
  addressEnterpriseForm: FormGroup;
  enterprise?: Enterprise;

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: {id: number, calle: String, numero: String, colonia: String, cp: String}, private enterpriseService: EnterpriseService, private fb: FormBuilder) {
    this.addressEnterpriseForm = this.fb.group({
      calle: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      numero: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
      colonia: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cp: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(5)])],
    });
  }

  ngOnInit() {
    this.addressEnterpriseForm.patchValue({
      calle: this.data.calle,
      numero: this.data.numero,
      colonia: this.data.colonia,
      cp: this.data.cp,
    });
  }

  close() {
    this.dialog.closeAll();
  }

  onSubmit(values: Enterprise) {
    if(this.addressEnterpriseForm.valid) {
      this.enterpriseService.updateAddressCompany(values, this.data.id).subscribe(() => location.reload())
      this.close();
    }
  }

}
