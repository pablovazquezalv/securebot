import { Component, Injectable, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatosServiceTsService } from 'src/app/Services/datos.service.ts.service';
import { Car } from 'src/app/Interfaces/car.interface';

@Component({
  selector: 'app-modal-editar-carro',
  templateUrl: './modal-editar-carro.component.html',
  styleUrls: ['./modal-editar-carro.component.css']
})

@Injectable()
export class ModalEditarCarroComponent implements OnInit {
  updateCarForm: FormGroup;
  car?: Car;

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: {id: number, name: String, descripcion: String}, private carService: DatosServiceTsService, private formBuilder: FormBuilder) {
    this.updateCarForm = this.formBuilder.group({
      nombre: ['', Validators.required], 
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.updateCarForm.patchValue({
      nombre: this.data.name,
      descripcion: this.data.descripcion
    });
  }

  close() {
    this.dialog.closeAll();
  }

  onSubmit(car: Car) {
    if(this.updateCarForm.valid) {
      this.carService.updateCar(car, this.data.id).subscribe(() => location.reload());
      this.close();
    }
  }
}
