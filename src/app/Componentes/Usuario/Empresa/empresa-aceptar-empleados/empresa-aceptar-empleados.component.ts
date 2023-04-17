import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalRechazarEmpleadoComponent } from '../modal-rechazar-empleado/modal-rechazar-empleado.component';
import { FilterEmployeesPipe } from 'src/app/pipes/filter-employees.pipe';

@Component({
  selector: 'app-empresa-aceptar-empleados',
  templateUrl: './empresa-aceptar-empleados.component.html',
  standalone: true,

  imports: [NgbToastModule, NgIf,NgFor],
  styleUrls: ['./empresa-aceptar-empleados.component.css']
})
export class EmpresaAceptarEmpleadosComponent implements OnInit {
  show = true;
  employees: User[] = [];
  mipipe = new FilterEmployeesPipe()
  pageSize = 5;
  desde = 0;
  hasta = 5;

  constructor(private router: Router, private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.userService.getEmployeesRequest().subscribe((employees: any) => {
      this.employees = employees.users;
    });
  }

  acceptEmployee(id: number) {
    this.userService.acceptEmployee(id).subscribe(() => location.reload());
  }

  openModal(id: number) {
    const dialogRef = this.dialog.open(ModalRechazarEmpleadoComponent, {
      width: '448px',
      height: 'auto',
      data: { id: id }
    });
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
