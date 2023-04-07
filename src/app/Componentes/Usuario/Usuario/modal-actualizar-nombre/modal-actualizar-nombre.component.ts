import { Component, Injectable, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Interfaces/user.interface';

@Component({
  selector: 'app-modal-actualizar-nombre',
  templateUrl: './modal-actualizar-nombre.component.html',
  styleUrls: ['./modal-actualizar-nombre.component.css']
})

@Injectable()
export class ModalActualizarNombreComponent implements OnInit {
  nameForm: FormGroup;
  user?: User;

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: {name: String, ap_paterno: String, ap_materno: String}, private userService: UserService, private formBuilder: FormBuilder) {
    this.nameForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(2)])], 
      ap_paterno: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$')])],
      ap_materno: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$')])]
    });
  }

  ngOnInit() {
    this.nameForm.patchValue({
      name: this.data.name,
      ap_paterno: this.data.ap_paterno,
      ap_materno: this.data.ap_materno
    });
  }

  close() {
    this.dialog.closeAll();
  }

  onSubmit(user: User) {
    if(this.nameForm.valid) {
      this.userService.updateNames(user).subscribe(() => location.reload());
      this.close();
    }
  }
}
