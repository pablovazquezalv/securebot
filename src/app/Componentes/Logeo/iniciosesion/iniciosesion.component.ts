import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Interfaces/user.interface';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalRecuperarContrasenaComponent } from '../../Usuario/Usuario/modal-recuperar-contrasena/modal-recuperar-contrasena.component';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})

@Injectable()
export class IniciosesionComponent {
  loginForm: FormGroup;
  user?: User;

  //errors
  showError: boolean = false;
  public apiFailed: boolean = false;
  errorMessage = null;
  show = true;
  
  constructor(private router: Router, private fb: FormBuilder, private userService: UserService, public dialog: MatDialog) {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  onSubmit(values: User) 
  {
    if(this.loginForm.valid)
     {
      this.userService.login(values).subscribe((response: any) => {
        localStorage.setItem('token', response.token);
        if(response.status === 200) {
          if(this.userService.getUserLoggedIn()) {
            location.assign('/inicio');
          }
        }
      }, (error) => {
        this.errorMessage = error.message;
        this.show = true;
      });
    }
  }

  onAnimationEnd(): void {
    this.apiFailed = false;
  }

  registrarse() {
    this.router.navigate(['/registrarse']);
  }

  openModal() {
    const dialogRef = this.dialog.open(ModalRecuperarContrasenaComponent, {
      width: '448px',
      height: 'auto',
    });
  }
}
