import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Interfaces/user.interface';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
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
  phone_number_value: string = '';
  phoneChanges: boolean = false;

  constructor(private router: Router, private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getUser();
  }
  
  getUser() {
    this.userService.getToken().subscribe((data: any) => {
      this.user = data.data;
      this.phone_number_value = this.user.phone_number;
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
  
  carrosUsuario() {
    this.router.navigate(['/autos-usuario']);
  }

  openNameModal(name: String, ap_paterno: String, ap_materno: String) {
    const dialogRef = this.dialog.open(ModalActualizarNombreComponent, {
      width: '448px',
      height: '450px',
      data: { name: name, ap_paterno: ap_paterno, ap_materno: ap_materno }
    });
  }

  openPasswordModal() {
    const dialogRef = this.dialog.open(ModalActualizarContrasenaComponent, {
      width: '448px',
      height: '243px',
      data: { id: this.user.id }
    });
  }

  openEmailModal() {
    const dialogRef = this.dialog.open(ModalActualizarCorreoComponent, {
      width: '448px',
      height: '243px',
      data: { id: this.user.id }
    });
  }

  openPhoneModal() {
    const dialogRef = this.dialog.open(ModalActualizarTelefonoComponent, {
      width: '448px',
      height: '243px',
      data: { id: this.user.id }
    });
  }
}
