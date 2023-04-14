import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Interfaces/user.interface';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalEliminarEmpleadoComponent } from '../modal-eliminar-empleado/modal-eliminar-empleado.component';

@Component({
  selector: 'app-empresa-ver-empleados',
  templateUrl: './empresa-ver-empleados.component.html',
  styleUrls: ['./empresa-ver-empleados.component.css']
})
export class EmpresaVerEmpleadosComponent implements OnInit {
  page = 0
  filterPost = "";
  employees: User[] = [];
  requests: User[] = [];
  count: number = 0;
  show = true;

  constructor(private router: Router, private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getEmployeees();
    this.getRequests();
  }

  getEmployeees() {
    this.userService.getEmployees().subscribe((employees: any) => {
      this.employees = employees.users;
    });
  }

  getRequests() {
    this.userService.getEmployeesRequest().subscribe((requests: any) => {
      this.count = requests.count;
    });
  }

  changePuesto(id: number) {
    this.userService.changePuesto(id).subscribe(() => location.reload());
  }

  openModal(id: number) {
    const dialogRef = this.dialog.open(ModalEliminarEmpleadoComponent, {
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

  verSolicitudes() {
    this.router.navigate(['/solicitudes-empleados']);
  }

  carrosEmpresa() {
    this.router.navigate(['/autos-usuario']);
  }
  nextPage()
  {
      this.page += 5;
  }

  previousPage()
  {
    if (this.page >= 0)
      this.page -= 5;
  }

  onSearch( filterPost: string )
  {
    this.page = 0;
    this.filterPost = filterPost;
  }
}
