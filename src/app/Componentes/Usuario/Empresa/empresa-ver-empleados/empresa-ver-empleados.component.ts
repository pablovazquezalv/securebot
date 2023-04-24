import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Interfaces/user.interface';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalEliminarEmpleadoComponent } from '../modal-eliminar-empleado/modal-eliminar-empleado.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FilterEmployeesPipe } from 'src/app/pipes/filter-employees.pipe';
import { map } from 'rxjs/operators';
import { WebSocketService } from 'src/app/Services/web-socket.service';

@Component({
  selector: 'app-empresa-ver-empleados',
  templateUrl: './empresa-ver-empleados.component.html',
  styleUrls: ['./empresa-ver-empleados.component.css']
})
export class EmpresaVerEmpleadosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  page = 0
  filterPost = "";
  employees: User[] = [];
  requests: User[] = [];
  count: number = 0;
  show = true;
  mipipe = new FilterEmployeesPipe()
  pageSize = 5;
  desde = 0;
  hasta = 5;

  iOwner: boolean = false;
  iAdmin: boolean = false;

  constructor(private router: Router, private userService: UserService, public dialog: MatDialog, private webSocketService: WebSocketService) { }

  ngOnInit() {
    this.getEmployeees();
    this.getRequests();
    this.isOwner();
    this.isAdmin();

    this.webSocketService.socket.on('user:company', ()=> {
      this.getRequests();
    })

    this.webSocketService.socket.on('accept:user', ()=> {
      this.getEmployeees();
    })

    this.webSocketService.socket.on('change:role', ()=> {
      this.getEmployeees();
    })

    this.webSocketService.socket.on('update:user', ()=> {
      this.getEmployeees();
    })

    this.webSocketService.socket.on('update:email', ()=> {
      this.getEmployeees();
    })

    this.webSocketService.socket.on('update:phone', ()=> {
      this.getEmployeees();
    })
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
    this.router.navigate(['/autos-empresa']);
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
    this.paginator.firstPage();
    this.pageSize = 5;
    this.page = 0;
    this.desde = 0;
    this.hasta = 5;
    this.filterPost = filterPost;
    if(this.filterPost != "")
    {
      this.employees = this.mipipe.transform(this.employees,this.filterPost)
      console.log(this.employees)
    }
    else{
      this.getEmployeees()
    }
  }

  cambiarPagina(e:PageEvent)
  {
    this.desde = e.pageIndex * e.pageSize
    this.hasta = this.desde + e.pageSize
  }
}
