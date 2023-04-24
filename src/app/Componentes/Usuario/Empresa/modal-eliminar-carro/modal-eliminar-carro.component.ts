import { Component, Injectable, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatosServiceTsService } from 'src/app/Services/datos.service.ts.service';

@Component({
  selector: 'app-modal-eliminar-carro',
  templateUrl: './modal-eliminar-carro.component.html',
  styleUrls: ['./modal-eliminar-carro.component.css']
})

@Injectable()
export class ModalEliminarCarroComponent {
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: { id: number }, private carService: DatosServiceTsService) { }

  close() {
    this.dialog.closeAll();
  }

  deleteCar() {
    this.carService.deleteCar(this.data.id).subscribe(() => location.reload());
    this.close();
  }
}
