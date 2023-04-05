import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Secure-Bot';
  showHeader= true;
  constructor(private router:Router)
   {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd)
      {
        if(val.url=="/login" || val.url=="/registrarse" || val.url=="/instrucciones" || val.url=="/code-verify" || val.url=="/crear-empresa" )
        {
          this.showHeader=false;
        }
        else{
          this.showHeader=true;
        }
      }
    })
   }

}
