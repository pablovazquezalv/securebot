import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './Componentes/nav-bar/nav-bar.component';
import { IniciosesionComponent } from './Componentes/Logeo/iniciosesion/iniciosesion.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { RegistrarseComponent } from './Componentes/Logeo/registrarse/registrarse.component';
import { CodigotelComponent } from './Componentes/Logeo/codigotel/codigotel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IniciosesionComponent,
    InicioComponent,
    FooterComponent,
    RegistrarseComponent,
    CodigotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
