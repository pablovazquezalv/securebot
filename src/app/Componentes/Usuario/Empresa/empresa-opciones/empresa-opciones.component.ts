import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { EnterpriseService } from 'src/app/Services/enterprise.service';
import { Enterprise } from 'src/app/Interfaces/enterprise.interface';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalDirreccionEmpresaComponent } from '../modal-dirreccion-empresa/modal-dirreccion-empresa.component';

@Component({
  selector: 'app-empresa-opciones',
  templateUrl: './empresa-opciones.component.html',
  styleUrls: ['./empresa-opciones.component.css']
})

@Injectable()
export class EmpresaOpcionesComponent implements OnInit {
  hasEnterprise: boolean = false;
  isInProcess: boolean = false;
  isFormDirty: boolean = false;
  iOwner: boolean = false;
  iAdmin: boolean = false;
  errorMessage = '';
  show = true;

  nameDefaultValue: string = '';
  emailDefaultValue: string = '';
  phoneDefaultValue: string = '';
  ciudadDefaultValue: string = '';
  estadoDefaultValue: string = '';

  updateEnterpriseForm: FormGroup;
  enterprise: Enterprise = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    calle: '',
    numero: '',
    colonia: '',
    cp: '',
    ciudad: '',
    estado: '',
    activity: '',
  };

  
  constructor(private router: Router, private userService: UserService, private enterpriseService: EnterpriseService, private fb: FormBuilder, public dialog: MatDialog) { 
    this.updateEnterpriseForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')])],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]+$')])],
      ciudad: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      estado: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.hasCompany();
    this.isCompanyInProcess();
    this.getEnterprise();
    this.isOwner();
    this.isAdmin();
  }

  hasCompany() {
    this.userService.hasEnterprise().pipe(
      map(hasCompany => {
        if(hasCompany) {
          this.hasEnterprise = true;
        } else {
          this.hasEnterprise = false;
        }
      })).subscribe();
  }

  isCompanyInProcess() {
    this.userService.isCompanyInProcess().pipe(
      map(isCompanyInProcess => {
        if(isCompanyInProcess) {
          this.isInProcess = true;
        } else {
          this.isInProcess = false;
        }
      })).subscribe();
  }

  getEnterprise() {
    this.userService.companyWithUser().subscribe((response: any) => {
      if(response.status == 200) {
        this.enterprise = response.data;
        this.nameDefaultValue = this.enterprise.name;
        this.emailDefaultValue = this.enterprise.email;
        this.phoneDefaultValue = this.enterprise.phone;
        this.ciudadDefaultValue = this.enterprise.ciudad;
        this.estadoDefaultValue = this.enterprise.estado;
      }
    })
  }

  onFormChanges() {
    this.isFormDirty = true;
  }

  updateEnterprise(values: Enterprise) {
    if(this.updateEnterpriseForm.valid) 
    {
      this.enterpriseService.updateCompany(values, this.enterprise.id).subscribe((response:any)=>{ 
        if(response.status == 200) {
          location.reload();
        }
      }, (error) => {
        this.errorMessage = 'El correo electrónico ya está en uso';
        this.show = true;
      }) 
    }
  }

  isOwner() {
    this.userService.isOwner().pipe(
      map(isOwner => {
        if(isOwner) {
          this.iOwner = true;
        } else {
          this.iOwner = false;
        }
      })
    ).subscribe();
  }

  isAdmin() {
    this.userService.isAdmin().pipe(
      map(isAdmin => {
        if(isAdmin) {
          this.iAdmin = true;
        } else {
          this.iAdmin = false;
        }
      })
    ).subscribe();
  }

  openModal() { 
    const dialogRef = this.dialog.open(ModalDirreccionEmpresaComponent, {
      width: '448px',
      height: 'auto',
      data: { 
        id: this.enterprise.id,
        calle: this.enterprise.calle,
        numero: this.enterprise.numero,
        colonia: this.enterprise.colonia,
        cp: this.enterprise.cp,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  crearEmpresa() {
    this.router.navigate(['/crear-empresa']);
  }

  afiliarEmpresa() {
    this.router.navigate(['/afiliar-empresa']);
  }
  
  solicitudesDeEmpleados() {
    this.router.navigate(['/solicitudes-empleados']);
  }
  
  empresaOpciones() {
    this.router.navigate(['/mi-empresa']);
  }

  verEmpleados() {
    this.router.navigate(['/empleados']);
  }

  carrosEmpresa() {
    this.router.navigate(['/autos-usuario']);
  }
}
