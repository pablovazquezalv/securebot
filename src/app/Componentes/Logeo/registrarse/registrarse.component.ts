import { Component, Injectable, OnInit } from '@angular/core';
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
export class RegistrarseComponent implements OnInit {
  registerForm: FormGroup;
  user?: User;
  hasId: boolean = false;
  id: number = 0;
  
  errorMessage = '';
  show = true;

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

  ngOnInit() {
    if(localStorage.getItem('id')) {
      this.hasId = true;
      this.id = parseInt(localStorage.getItem('id') || '0');

      this.userService.getUser(this.id).subscribe((response: any) => {
        this.registerForm.patchValue({
          name: response.name,
          ap_paterno: response.ap_paterno,
          ap_materno: response.ap_materno,
          email: response.email,
          phone_number: response.phone_number,
          password: '',
          password_confirmation: ''
        })
      });
    } 
  }

  onSubmit(values: User) {
    if(this.registerForm.valid && values.password === values.password_confirmation && !localStorage.getItem('id')) {
      this.userService.register(values).subscribe((response: any)=> {
        if (response.status == 201) {
          this.userService.setSignedRoute(response.url);
          localStorage.setItem('id', response.data.id);
          this.router.navigate(['/instrucciones']);
        } 
      }, (error) => {
        this.errorMessage = "El correo electrónico ya se encuentra en uso.";
        this.show = true;
        console.log("Error: ", this.errorMessage);
      });
    } else {
      if (this.registerForm.valid && values.password === values.password_confirmation && localStorage.getItem('id')) {
        this.userService.incorrectDataUser(values, this.id).subscribe((response: any) => {
          if (response.status == 200) {
            this.userService.setSignedRoute(response.url);
            this.router.navigate(['/instrucciones']);
          }
        }, (error) => {
          if(error.status == 400) {
          this.errorMessage = error.message;
          this.show = true;
          console.log("Error: ", this.errorMessage);
          } else {
            this.errorMessage = "El correo electrónico ya se encuentra en uso.";
            this.show = true;
            console.log("Error: ", this.errorMessage);
          }
        });
      }
    }
  }

  login() {
    this.router.navigate(['/login']);
  }
}
