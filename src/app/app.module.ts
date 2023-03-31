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
import { VerusuariosComponent } from './Componentes/Admin/administrar_usuarios/verusuarios/verusuarios.component';
import { TiposcarrosComponent } from './Componentes/Usuario/Carro/tiposcarros/tiposcarros.component';
import { CrearcarroComponent } from './Componentes/Usuario/Carro/crearcarro/crearcarro.component';
import { EditarcarroComponent } from './Componentes/Usuario/Carro/editarcarro/editarcarro.component';
import { CrearempresaComponent } from './Componentes/Usuario/Empresa/crearempresa/crearempresa.component';
import { PerfilusuarioComponent } from './Componentes/Usuario/perfilusuario/perfilusuario.component';
import { VercarroespecificoComponent } from './Componentes/Usuario/Carro/vercarroespecifico/vercarroespecifico.component';
import { EmpresausuarioComponent } from './Componentes/Usuario/empresausuario/empresausuario.component';
import { AutosusuariodatosComponent } from './Componentes/Usuario/autosusuariodatos/autosusuariodatos.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IniciosesionComponent,
    InicioComponent,
    FooterComponent,
    RegistrarseComponent,
    CodigotelComponent,
    VerusuariosComponent,
    TiposcarrosComponent,
    CrearcarroComponent,
    EditarcarroComponent,
    CrearempresaComponent,
    PerfilusuarioComponent,
    VercarroespecificoComponent,
    EmpresausuarioComponent,
    AutosusuariodatosComponent
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
