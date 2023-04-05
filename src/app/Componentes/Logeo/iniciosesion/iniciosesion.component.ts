import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})

@Injectable()
export class IniciosesionComponent {
  loginForm: FormGroup;
  user?: User;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  onSubmit(values: User) {
    if(this.loginForm.valid) {
      this.userService.login(values).subscribe((response: any) => {
        localStorage.setItem('token', response.token);
        if(response.status === 200) {
          if(this.userService.getUserLoggedIn()) {
            location.assign('/inicio');
          }
        }
      })
    }
  }

  registrarse() {
  this.router.navigate(['/register']);
  }
}
