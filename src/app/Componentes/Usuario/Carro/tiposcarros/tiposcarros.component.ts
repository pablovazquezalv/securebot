import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiposcarros',
  templateUrl: './tiposcarros.component.html',
  styleUrls: ['./tiposcarros.component.css']
})
export class TiposcarrosComponent implements OnInit {

 constructor(private router:Router) { }
 
 

 ngOnInit(): void {
  
  
 }

 crearCarro()
 {
  this.router.navigate(['/crear-carro']);
 }

 verCarritoEspecifico()
 {
  this.router.navigate(['/ver-carro-especifico']);
 }
}