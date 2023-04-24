import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Car } from 'src/app/Interfaces/car.interface';
import { DatosServiceTsService } from 'src/app/Services/datos.service.ts.service';
import { UserService } from 'src/app/Services/user.service';
import { WebSocketService } from 'src/app/Services/web-socket.service';
import { ModalEliminarCarroComponent } from '../modal-eliminar-carro/modal-eliminar-carro.component';
import { ModalEditarCarroComponent } from '../modal-editar-carro/modal-editar-carro.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-autosusuariodatos',
  templateUrl: './autosusuariodatos.component.html',
  styleUrls: ['./autosusuariodatos.component.css']
})
export class AutosusuariodatosComponent implements OnInit {
  iOwner: boolean = false;
  iAdmin: boolean = false;
  iInCharge: boolean = false;
  carros:Car[] = [];

  constructor(private router: Router, private userService: UserService, private carService:DatosServiceTsService, private webSocketService: WebSocketService, public dialog: MatDialog) { }

  ngOnInit() {
    this.isOwner();
    this.isAdmin();
    this.isInCharge();
    this.getCars();

    this.webSocketService.socket.on('new:carro', ()=> {
      this.getCars();
    })

    this.webSocketService.socket.on('update:carro', ()=> {
      this.getCars();
    })

    this.webSocketService.socket.on('delete:carro', ()=> {
      this.getCars();
    })
  }

  getCars()
  {
    this.carService.getCars().subscribe(data => {
      this.carros = data
    })
  }

  isOwner() {
    this.userService.isOwner().pipe(
      map(isOwner => {
        if(isOwner) {
          this.iOwner = true;
        } else {
          this.iOwner = false;
        }
      })
    ).subscribe();
  }

  isAdmin() {
    this.userService.isAdmin().pipe(
      map(isAdmin => {
        if(isAdmin) {
          this.iAdmin = true;
        } else {
          this.iAdmin = false;
        }
      })
    ).subscribe();
  }

  isInCharge() {
    this.userService.isInCharge().pipe(
      map(isInCharge => {
        if(isInCharge) {
          this.iInCharge = true;
        } else {
          this.iInCharge = false;
        }
      })
    ).subscribe();
  }

  openDeleteModal(id: number){
    const dialogRef = this.dialog.open(ModalEliminarCarroComponent, {
      width: '448px',
      height: 'auto',
      data: { id: id}
    });
  }

  openEditModal(name: String, descripcion: String, id: number){
    const dialogRef = this.dialog.open(ModalEditarCarroComponent, {
      width: '448px',
      height: 'auto',
      data: { name: name, descripcion: descripcion, id: id }
    });
  }

  solicitudesDeEmpleados() {
    this.router.navigate(['/solicitudes-empleados']);
  }

  empresaOpciones() {
    this.router.navigate(['/mi-empresa']);
  }

  verEmpleados() {
    this.router.navigate(['/empleados']);
  }

  carrosEmpresa() {
    this.router.navigate(['/autos-empresa']);
  }

  verSensores(carro:number) {
    this.router.navigate(['/datos-carrito/' + carro]);
  }

  crearCarro() {
    this.router.navigate(['/crear-carrito']);
  }

}
