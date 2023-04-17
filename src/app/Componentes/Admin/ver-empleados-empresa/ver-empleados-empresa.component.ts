import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Interfaces/user.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PageEvent } from '@angular/material/paginator';
import { FilterEmployeesPipe } from 'src/app/pipes/filter-employees.pipe';

@Component({
  selector: 'app-ver-empleados-empresa',
  templateUrl: './ver-empleados-empresa.component.html',
  styleUrls: ['./ver-empleados-empresa.component.css']
})
export class VerEmpleadosEmpresaComponent implements OnInit {
  company?: string;
  employees: User[] = [];
  id?: number;
  errorMessage = '';
  show = true;
  desde = 0;
  hasta = 5;
  filterPost = "";
  mipipe = new FilterEmployeesPipe()
  pageSize = 5;
  

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() 
  {
    const errorMessage = localStorage.getItem('errorMessage');
    
    if (errorMessage)
     {
      this.errorMessage = "Esa empresa no existe!";
      this.show = true;
      localStorage.removeItem('errorMessage');
    }
    
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getEmployeesWithParams(this.id).subscribe((employees: any) => {
      this.employees = employees.users;
      this.company = employees.company.name;
      
    }, (error) => {
      this.errorMessage = error.message;
      localStorage.setItem('errorMessage', error.message);
     this.location.back();

      
    });
  }

  regresarVerEmpresas() 
  {
    this.router.navigate(['/empresas']);
  }

  onSearch( filterPost: string )
  {
    this.desde = 0;
    this.filterPost = filterPost;
    if(this.filterPost != "")
    {
      this.employees = this.mipipe.transform(this.employees,this.filterPost)
      console.log(this.employees)
    }
    else{
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.userService.getEmployeesWithParams(this.id).subscribe((employees: any) => {
        this.employees = employees.users;
        this.company = employees.company.name;
        
      }, (error) => {
        this.errorMessage = error.message;
        localStorage.setItem('errorMessage', error.message);
      this.location.back();

        
      });
    }
  }

   cambiarPagina(e:PageEvent)
  {
    this.desde = e.pageIndex * e.pageSize
    this.hasta = this.desde + e.pageSize
  }
}
