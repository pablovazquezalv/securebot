import { Component, Injectable, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-modal-actualizar-correo',
  templateUrl: './modal-actualizar-correo.component.html',
  styleUrls: ['./modal-actualizar-correo.component.css']
})

@Injectable()
export class ModalActualizarCorreoComponent {
  errorMessage = '';
  show = true;

  constructor(private userService: UserService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: { email: string }) { }
  json = { email: this.data.email }
  jsonString = JSON.parse(JSON.stringify(this.json));

  close() {
    this.dialog.closeAll();
  }

  updateEmail() {
    this.userService.updateEmail(this.jsonString).subscribe((response: any) => {
        this.close();
        this.userService.logout();
        localStorage.removeItem('token');
        localStorage.removeItem('iAdmin');
        localStorage.removeItem('userLoggedIn');
        location.assign('/login')
    }, (error) => {
      this.errorMessage = "El correo electrónico ya se encuentra en uso.";
      this.show = true;
      console.log("Error: ", this.errorMessage);
    });
  }
}
