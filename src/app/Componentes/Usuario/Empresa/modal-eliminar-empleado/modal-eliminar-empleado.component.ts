import { Component, Injectable, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Interfaces/user.interface';

@Component({
  selector: 'app-modal-eliminar-empleado',
  templateUrl: './modal-eliminar-empleado.component.html',
  styleUrls: ['./modal-eliminar-empleado.component.css']
})

@Injectable()
export class ModalEliminarEmpleadoComponent {
  employee?: User;
  eliminateForm: FormGroup;

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: { id: number }, private userService: UserService, private fb: FormBuilder) {
    this.eliminateForm = this.fb.group({
      motivo: ['', Validators.required]
    });
  }

  close() {
    this.dialog.closeAll();
  }

  onSubmit(employee: User) {
    if(this.eliminateForm.valid) {
      this.userService.disableEmployee(this.data.id, employee).subscribe(() => location.reload());
      this.close();
    }
  }

}
