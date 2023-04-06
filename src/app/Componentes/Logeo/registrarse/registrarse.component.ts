import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})

@Injectable()
export class RegistrarseComponent {
  registerForm: FormGroup;
  user?: User;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      ap_paterno: ['', Validators.required],
      ap_materno: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone_number: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      password_confirmation: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
   }

  onSubmit(values: User) {
    if(this.registerForm.valid && values.password === values.password_confirmation) {
      this.userService.register(values).subscribe((response: any)=> {
        if (response.status == 201) {
          this.userService.setSignedRoute(response.url);
          this.router.navigate(['/instrucciones']);
        } 
      });
    }
  }

  login() {
    this.router.navigate(['/login']);
  }
}
