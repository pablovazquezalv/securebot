import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.component.html',
  styleUrls: ['./perfilusuario.component.css']
})

export class PerfilusuarioComponent implements OnInit {
  user: User = {
    id: 0,
    name: '',
    ap_paterno: '',
    ap_materno: '',
    email: '',
    password: '',
    phone_number: '',
    rol_id: 0,
  }
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getToken().subscribe((data: any) => {
      this.user = data.data;
    })
  }
  perfilUsuario() {
    this.router.navigate(['/profile']);
  }

  empresaUsuario() {
    this.router.navigate(['/empresa-usuario']);
  }

  crearEmpresa() {
    this.router.navigate(['/crear-empresa']);
  }
  
  carrosUsuario() {
    this.router.navigate(['/autos-usuario']);
  }
}
