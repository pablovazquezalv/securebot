import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent 
{
constructor(private router: Router) { }

registrarse()
{
  this.router.navigate(['/registrarse']);
}
}
