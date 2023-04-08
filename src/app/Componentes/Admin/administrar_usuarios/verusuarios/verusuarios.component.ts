import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmacionStatusComponent } from '../../modal-confirmacion-status/modal-confirmacion-status.component';
import { RolesModificarComponent } from '../../roles-modificar/roles-modificar.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-verusuarios',
  templateUrl: './verusuarios.component.html',
  styleUrls: ['./verusuarios.component.css']
})
export class VerusuariosComponent implements OnInit {
  users: User[] = [];
  pageSize = 5;
  desde:number = 0;
  hasta:number = 5;
  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getUsers();
    // console.log(this.users)
    // console.log(this.total)
    // console.log(this.perPage)
    // console.log(this.currentPage)
  }

  getUsers() {
    this.userService.getUsers().subscribe( users => {
      this.users = users.data
      // this.total = users.total
      // this.perPage = users.perPage
      // this.currentPage = users.page
    });
  }

  openStatusModal(id: number) {
    const dialogRef = this.dialog.open(ModalConfirmacionStatusComponent, {
      width: '448px',
      height: 'auto',
      data: { id: id }
    });
  }
  openRoleModal(id: number) {
    const dialogRef = this.dialog.open(RolesModificarComponent, {
      width: '448px',
      height: 'auto',
      data: { id: id }
    });
  }

  cambiarPagina(e:PageEvent)
  {
    this.desde = e.pageIndex * e.pageSize
    this.hasta = this.desde + e.pageSize
  }
}
