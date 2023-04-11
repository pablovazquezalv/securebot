import { Component, Injectable, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-modal-rechazar-empleado',
  templateUrl: './modal-rechazar-empleado.component.html',
  styleUrls: ['./modal-rechazar-empleado.component.css']
})

@Injectable()
export class ModalRechazarEmpleadoComponent {
  
    constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: { id: number }, private userService: UserService) { }

    close() {
      this.dialog.closeAll();
    }

    rejectEmployee() {
      this.userService.rejectEmployee(this.data.id).subscribe(() => location.reload());
    }
}
