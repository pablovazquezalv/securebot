import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Enterprise } from 'src/app/Interfaces/enterprise.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresausuario',
  templateUrl: './empresausuario.component.html',
  styleUrls: ['./empresausuario.component.css']
})
export class EmpresausuarioComponent implements OnInit {
  enterprise: Enterprise = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    calle: '',
    numero: '',
    colonia: '',
    cp: '',
    ciudad: '',
    estado: '',
    activity: '',
  };
  hasEnterprise: boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.getEnterprise();
  }

  perfilUsuario() {
    this.router.navigate(['/profile']);
  }

  empresaUsuario() {
    this.router.navigate(['/empresa-usuario']);
  }

  getEnterprise() {
    this.userService.companyWithUser().subscribe((response: any) => {
      if(response.status == 200) {
        this.hasEnterprise = true;
        this.enterprise = response.data;
      } else {
        this.hasEnterprise = false;
      }
    })
  }
}
