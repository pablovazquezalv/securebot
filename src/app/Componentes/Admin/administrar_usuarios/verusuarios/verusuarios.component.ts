import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmacionStatusComponent } from '../../modal-confirmacion-status/modal-confirmacion-status.component';
import { RolesModificarComponent } from '../../roles-modificar/roles-modificar.component';
import { PageEvent } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { Observable } from 'rxjs';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

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
  users:[] = []
  pageSize = 5;
  page = 0;
  filterPost = "";
  userForm: FormGroup;
  filteredUsers:[] = [];
  constructor(private userService: UserService, public dialog: MatDialog, private fb: FormBuilder) { 
    this.userForm = this.fb.group({
      user: ['', Validators.compose([Validators.required])],
    })
  }

  ngOnInit() {
    this.getUsers();
    console.log(this.filterPost)
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

  nextPage()
  {
    if (this.page <= 0)
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
    this.rol = rol
    this.userService.getUsersAI(this.st, this.rol).subscribe(users => {
      this.users = users.data;
    });
  }
}
 