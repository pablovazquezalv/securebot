import { Component, Injectable, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { RoleService } from 'src/app/Services/role.service';
import { User } from 'src/app/Interfaces/user.interface';
import { Role } from 'src/app/Interfaces/role.interface';

@Component({
  selector: 'app-roles-modificar',
  templateUrl: './roles-modificar.component.html',
  styleUrls: ['./roles-modificar.component.css']
})

@Injectable()
export class RolesModificarComponent {
  roleForm: FormGroup;
  user?: User;
  roles?: Role[];
  errorMessage = null;
  show = true;

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: { id: number }, private userService: UserService, private roleService: RoleService, private formBuilder: FormBuilder) {
    this.roleForm = this.formBuilder.group({
      rol: ['', Validators.required]
    });

    this.roleService.getRoles().subscribe(
      roles => this.roles = roles
    );
  }

  close() {
    this.dialog.closeAll();
  }

  onSubmit(user: User) {
    if(this.roleForm.valid) 
    {
      this.userService.changeRole(user, this.data.id).subscribe((response: any) => {
        if(response.status === 200) {
          location.reload();
          this.close();
        }
      }, (error) => {
        this.errorMessage = error.message;
        this.show = true;
      });
      
    }
  }
}
