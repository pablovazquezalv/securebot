import { Component, Injectable, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-modal-actualizar-telefono',
  templateUrl: './modal-actualizar-telefono.component.html',
  styleUrls: ['./modal-actualizar-telefono.component.css']
})

@Injectable()
export class ModalActualizarTelefonoComponent {
  constructor(private userService: UserService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: { phone_number: string }) { }
  json = { phone_number: this.data.phone_number }
  jsonString = JSON.parse(JSON.stringify(this.json));

  close() {
    this.dialog.closeAll();
  }

  updatePhone() {
    this.userService.updatePhone(this.jsonString).subscribe((response: any) => {
      if(response.status == 200) {
        this.userService.setSignedRoute(response.url);
        this.close();
        this.userService.logout().subscribe();
        localStorage.removeItem('token');
        localStorage.removeItem('iAdmin');
        localStorage.removeItem('userLoggedIn');
        location.assign('/code-verify')
      } 
    });
  }
}
