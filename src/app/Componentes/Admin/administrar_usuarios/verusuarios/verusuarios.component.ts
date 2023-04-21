import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmacionStatusComponent } from '../../modal-confirmacion-status/modal-confirmacion-status.component';
import { RolesModificarComponent } from '../../roles-modificar/roles-modificar.component';
import { PageEvent } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { WebSocketService } from 'src/app/Services/web-socket.service';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms ease-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('500ms ease-out', style({ opacity: 0 })),
  ]),
]);

@Component({
  selector: 'app-verusuarios',
  templateUrl: './verusuarios.component.html',
  styleUrls: ['./verusuarios.component.css'],
  animations: [fadeInOut],
})
export class VerusuariosComponent implements OnInit {
  rol:Number = 0
  st = 1;
  l = false
  users: User[] = [];
  pageSize = 5;
  desde = 0;
  hasta = 5;
  page = 0;
  filterPost = "";
  userForm: FormGroup;
  filteredUsers: any[] = [];
  selectedRole: Number = 0;

  mipipe = new FilterPipe()

  constructor(private userService: UserService, public dialog: MatDialog, private fb: FormBuilder, private webSocketService: WebSocketService) { 
    this.userForm = this.fb.group({
      user: ['', Validators.compose([Validators.required])],
    })
  }

  ngOnInit() {
    this.webSocketService.socket.on('new:user', ()=> {
      this.getUsers();
    })

    this.webSocketService.socket.on('change:role', ()=> {
      console.log('cambio de rol')
      this.getUsers();
    })

    this.getUsers();
  }

  getUsers() {
    this.userService.getUsersAI(this.st, this.rol).subscribe(users => {
      this.users = users.data;
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

  nextPage()
  {
    if (this.page <= this.users.length)
      this.page += 5;
      this.l = false
      if(this.page == this.users.length || this.page == this.users.length + 1 || this.page == this.users.length + 2
        || this.page == this.users.length + 3 || this.page == this.users.length + 4 || this.page == this.users.length + 5)
      {
        console.log(this.l)
        this.l = true
        this.page -= 5
      }
  }

  previousPage()
  {
    if (this.page >= 0)
      this.page -= 5;
      this.l = false
  }

  onSearch( filterPost: string )
  {
    this.desde = 0;
    this.filterPost = filterPost;
    if(this.filterPost != "")
    {
      this.users = this.mipipe.transform(this.users,this.filterPost)
      console.log(this.users)
    }
    else{
      this.getUsers()
    }
  }

  status()
  {
    if (this.st == 1)
    {
      this.st = 0
      this.userService.getUsersAI(this.st, this.rol).subscribe(users => {
        this.users = users.data;
      });
    }
    else
    {
      this.st = 1
      this.userService.getUsersAI(this.st, this.rol).subscribe(users => {
        this.users = users.data;
      });
    }
  }

  rolCheck(rol: Number)
  {
    if(rol == this.rol)
    {
      this.rol = 0
      this.userService.getUsersAI(this.st, this.rol).subscribe(users => {
        this.users = users.data;
      });
      this.selectedRole = 0;
    }
    else
    {
      this.rol = rol
      this.userService.getUsersAI(this.st, this.rol).subscribe(users => {
        this.users = users.data;
      });
      this.selectedRole = rol;
    }
  }
}
 