import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codigotel',
  templateUrl: './codigotel.component.html',
  styleUrls: ['./codigotel.component.css']
})

@Injectable()
export class CodigotelComponent {
  codeForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.codeForm = this.fb.group({
      codigo1: ['', Validators.required],
      codigo2: ['', Validators.required],
      codigo3: ['', Validators.required],
      codigo4: ['', Validators.required],
    });
  }

  onSubmit(values: any) {
    const code = values.codigo1 + values.codigo2 + values.codigo3 + values.codigo4;
    const json = { "codigo": parseInt(code) }
    const jsonString = JSON.parse(JSON.stringify(json));

    if(this.codeForm.valid) {
      this.userService.verifyPhone(jsonString).subscribe((response: any) => {
        if(response.status == 200) {
          this.router.navigate(['/login']);
          localStorage.removeItem('signedRoute');
        }
      })
    }
  }
}
