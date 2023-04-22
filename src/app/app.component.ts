import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { WebSocketService } from './Services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Secure-Bot';
  showHeader= true;
  showSpinner = true;
  constructor(private router:Router, private webSocketService: WebSocketService)
   {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd)
      {
        if(val.url=="/login" || val.url=="/registrarse" || val.url=="/instrucciones" || val.url=="/code-verify" ||  val.url=="/correo-equivocado" || val.url=="/telefono-equivocado"  )
        {
          this.showHeader=false;
          this.showSpinner = true;
          
        }
        else if (val.url=="/datos-carrito" || val.url == "/historial-datos")
        {
          this.showHeader=true;
          this.showSpinner = false;
        }
        else
        {
          this.showHeader=true;
          this.showSpinner = true;
          
        }
       
      }
    })
   }

   ngOnInit(): void {
     this.webSocketService.connect();
   }

}
