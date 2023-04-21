import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/Interfaces/car.interface';
import { DatosServiceTsService } from 'src/app/Services/datos.service.ts.service';

@Component({
  selector: 'app-crearcarro',
  templateUrl: './crearcarro.component.html',
  styleUrls: ['./crearcarro.component.css']
})
export class CrearcarroComponent{
  carForm: FormGroup

  constructor(private carService: DatosServiceTsService, private fb: FormBuilder){
    this.carForm = this.fb.group({
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      descripcion: ['', Validators.compose([Validators.required,Validators.minLength(2)])]
    });
  }

  onSubmit(values: Car) {
    if (this.carForm.valid) {
      console.log(values)
      this.carService.createCar(values).subscribe((response:any) => {
        location.assign('/mi-empresa')
      });
    };
  }
}
