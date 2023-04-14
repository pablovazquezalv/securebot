import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Interfaces/user.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ver-empleados-empresa',
  templateUrl: './ver-empleados-empresa.component.html',
  styleUrls: ['./ver-empleados-empresa.component.css']
})
export class VerEmpleadosEmpresaComponent implements OnInit {
  company?: string;
  employees: User[] = [];
  id?: number;

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getEmployeesWithParams(this.id).subscribe((employees: any) => {
      this.employees = employees.users;
      this.company = employees.company.name;
    }, (error) => {
      this.location.back();
    });
  }
}
