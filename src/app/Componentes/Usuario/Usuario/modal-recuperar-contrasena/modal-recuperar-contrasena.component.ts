import { Component, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-modal-recuperar-contrasena',
  templateUrl: './modal-recuperar-contrasena.component.html',
  styleUrls: ['./modal-recuperar-contrasena.component.css']
})

@Injectable()
export class ModalRecuperarContrasenaComponent {
  recoverPasswordForm: FormGroup;
  errorMessage = null;
  show = true;
  constructor(public dialog: MatDialog, private userService: UserService, private formBuilder: FormBuilder) {
    this.recoverPasswordForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')])]
    });
  }

  close() {
    this.dialog.closeAll();
  }

  onSubmit(data: JSON) {
    if(this.recoverPasswordForm.valid) {
      this.userService.recoverPassword(data).subscribe((response:any)=> {
        if(response.status === 200) {
          this.close();
        }
      },(error) => {
        this.errorMessage = error.message;
        this.show = true;
        console.log("Error");
      });
      
    }
  }
}
