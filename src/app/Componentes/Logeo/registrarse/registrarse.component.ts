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
      name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      ap_paterno: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$")])],
      ap_materno: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$")])],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')])],
      phone_number: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]+$')])],
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
