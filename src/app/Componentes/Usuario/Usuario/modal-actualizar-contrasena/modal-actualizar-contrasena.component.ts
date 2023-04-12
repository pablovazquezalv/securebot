import { Component, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Interfaces/user.interface';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-modal-actualizar-contrasena',
  templateUrl: './modal-actualizar-contrasena.component.html',
  styleUrls: ['./modal-actualizar-contrasena.component.css']
})

@Injectable()
export class ModalActualizarContrasenaComponent {
  passwordForm: FormGroup;
  user?: User;

  errorMessage = null;
  show = true;
  constructor(public dialog: MatDialog, private userService: UserService, private formBuilder: FormBuilder) {
    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])], 
      new_password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      password_confirmation: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
  }

  close() {
    this.dialog.closeAll();
  }

  onSubmit(user: User) 
  {
    if(this.passwordForm.valid) {
      this.userService.updatePassword(user).subscribe((response: any) => {
        if(response.status === 200) {
          location.reload();
          this.close();
        }
      }, (error) => {
        this.errorMessage = error.message;
        this.show = true;
        console.log("Error");
      });
    }
  }
}
