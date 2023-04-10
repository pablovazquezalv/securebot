import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Enterprise } from 'src/app/Interfaces/enterprise.interface';
import { User } from 'src/app/Interfaces/user.interface';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalActualizarNombreComponent } from '../modal-actualizar-nombre/modal-actualizar-nombre.component';
import { ModalActualizarCorreoComponent } from '../modal-actualizar-correo/modal-actualizar-correo.component';
import { ModalActualizarTelefonoComponent } from '../modal-actualizar-telefono/modal-actualizar-telefono.component';
import { ModalActualizarContrasenaComponent } from '../modal-actualizar-contrasena/modal-actualizar-contrasena.component';

@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.component.html',
  styleUrls: ['./perfilusuario.component.css']
})

export class PerfilusuarioComponent implements OnInit {
  user: User = {
    id: 0,
    name: '',
    ap_paterno: '',
    ap_materno: '',
    email: '',
    password: '',
    phone_number: '',
    rol_id: 0,
  }

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

  emailForm: FormGroup;
  phoneForm: FormGroup;

  phoneNumberDefault: string = '';
  phoneNumberValue: string = '';
  emailDefault: string = '';
  emailValue: string = '';
  phoneChanges: boolean = false;
  emailChanges: boolean = false;
  hasEnterprise: boolean = false;

  errorMessage = null;
  show = true;
  
  constructor(private router: Router, private userService: UserService, public dialog: MatDialog) {
    this.emailForm = new FormBuilder().group({
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')])]
    });
    this.phoneForm = new FormBuilder().group({
      phone_number: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]+$')]]
    });
   }

  ngOnInit() {
    this.getUser();
    this.getEnterprise();
  }
  
  getUser() {
    this.userService.getToken().subscribe((data: any) => {
      this.user = data.data;
      this.phoneNumberDefault = this.user.phone_number;
      this.emailDefault = this.user.email;
      this.emailChanges = false;
      this.phoneChanges = false;
    })
  }

  getEnterprise() {
    this.userService.companyWithUser().subscribe((response: any) => {
      if(response.status == 200) {
        this.hasEnterprise = true;
        this.enterprise = response.data;
      } else {
        this.hasEnterprise = false;
      }
    })
  }

  perfilUsuario() {
    this.router.navigate(['/profile']);
  }

  empresaUsuario() {
    this.router.navigate(['/empresa-usuario']);
  }

  crearEmpresa() {
    this.router.navigate(['/crear-empresa']);
  }
  
  openNameModal(name: String, ap_paterno: String, ap_materno: String) {
    const dialogRef = this.dialog.open(ModalActualizarNombreComponent, {
      width: '448px',
      height: 'auto',
      data: { name: name, ap_paterno: ap_paterno, ap_materno: ap_materno }
    });
  }

  openPasswordModal() {
    const dialogRef = this.dialog.open(ModalActualizarContrasenaComponent, {
      width: '448px',
      height: 'auto',
    });
  }

  openEmailModal() {
    const dialogRef = this.dialog.open(ModalActualizarCorreoComponent, {
      width: '448px',
      height: 'auto',
      data: { email: this.emailValue }
    });
  }

  openPhoneModal() {
    const dialogRef = this.dialog.open(ModalActualizarTelefonoComponent, {
      width: '448px',
      height: 'auto',
      data: { phone_number: this.phoneNumberValue }
    });
  }

  phoneButtonEnable() {
    if(this.phoneNumberDefault !== this.phoneNumberValue) {
      this.phoneChanges = true;
    } else {
      this.phoneChanges = false;
    }
  }

  emailButtonEnable() {
    if(this.emailDefault !== this.emailValue) {
      this.emailChanges = true;
    } else {
      this.emailChanges = false;
    }
  }
}
