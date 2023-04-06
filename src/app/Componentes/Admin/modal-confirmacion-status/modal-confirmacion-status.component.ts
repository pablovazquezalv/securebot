import { Component, Injectable, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/Interfaces/user.interface';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-modal-confirmacion-status',
  templateUrl: './modal-confirmacion-status.component.html',
  styleUrls: ['./modal-confirmacion-status.component.css']
})

@Injectable()
export class ModalConfirmacionStatusComponent {
  user?: User;
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: { id: number}, private userService: UserService) { }

  close() {
    this.dialog.closeAll();
  }

  changeStatus() {
    this.userService.changeStatus(this.data.id).subscribe(() => location.reload());
    this.close();
  }

}
