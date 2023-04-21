//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'
import {MatPaginatorModule} from '@angular/material/paginator';

//Componentes
import { AppComponent } from './app.component';
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
import { PerfilusuarioComponent } from './Componentes/Usuario/Usuario/perfilusuario/perfilusuario.component';
import { VercarroespecificoComponent } from './Componentes/Usuario/Carro/vercarroespecifico/vercarroespecifico.component';
import { EmpresausuarioComponent } from './Componentes/Usuario/Usuario/empresausuario/empresausuario.component';
import { AutosusuariodatosComponent } from './Componentes/Usuario/Empresa/autos-empresa-datos/autosusuariodatos.component';
import { WildcardComponent } from './Componentes/wildcard/wildcard.component';
import { InstruccionesComponent } from './Componentes/Logeo/instrucciones/instrucciones.component';

//Interceptors
import { TokenInterceptor } from './Interceptors/token.interceptor';
import { SpinnerInterceptor } from './Interceptors/spinner.interceptor';
import { RolesModificarComponent } from './Componentes/Admin/roles-modificar/roles-modificar.component';
import { ModalActualizarNombreComponent } from './Componentes/Usuario/Usuario/modal-actualizar-nombre/modal-actualizar-nombre.component';
import { ModalActualizarCorreoComponent } from './Componentes/Usuario/Usuario/modal-actualizar-correo/modal-actualizar-correo.component';
import { ModalActualizarTelefonoComponent } from './Componentes/Usuario/Usuario/modal-actualizar-telefono/modal-actualizar-telefono.component';
import { ModalActualizarContrasenaComponent } from './Componentes/Usuario/Usuario/modal-actualizar-contrasena/modal-actualizar-contrasena.component';
import { ModalConfirmacionStatusComponent } from './Componentes/Admin/modal-confirmacion-status/modal-confirmacion-status.component';
import { EmpresaOpcionesComponent } from './Componentes/Usuario/Empresa/empresa-opciones/empresa-opciones.component';
import { AfilarEmpresaComponent } from './Componentes/Usuario/Empresa/afilar-empresa/afilar-empresa.component';
import { SolicitudesEmpresasComponent } from './Componentes/Admin/solicitudes-empresas/solicitudes-empresas.component';
import { ModalRecuperarContrasenaComponent } from './Componentes/Usuario/Usuario/modal-recuperar-contrasena/modal-recuperar-contrasena.component';
import { EmpresaAceptarEmpleadosComponent } from './Componentes/Usuario/Empresa/empresa-aceptar-empleados/empresa-aceptar-empleados.component';
import { EmpresaVerEmpleadosComponent } from './Componentes/Usuario/Empresa/empresa-ver-empleados/empresa-ver-empleados.component';
import { VerEmpresasComponent } from './Componentes/Admin/ver-empresas/ver-empresas.component';
import { VerEmpleadosEmpresaComponent } from './Componentes/Admin/ver-empleados-empresa/ver-empleados-empresa.component';
import { BuscadorEmpresasComponent } from './Componentes/Usuario/Empresa/buscador-empresas/buscador-empresas.component';
import { ModalDirreccionEmpresaComponent } from './Componentes/Usuario/Empresa/modal-dirreccion-empresa/modal-dirreccion-empresa.component';
import { ModalRechazarSolicitudEmpresaComponent } from './Componentes/Admin/modal-rechazar-solicitud-empresa/modal-rechazar-solicitud-empresa.component';
import { ModalDesactivarEmpresaComponent } from './Componentes/Admin/modal-desactivar-empresa/modal-desactivar-empresa.component';
import { ModalRechazarEmpleadoComponent } from './Componentes/Usuario/Empresa/modal-rechazar-empleado/modal-rechazar-empleado.component';
import { ModalEliminarEmpleadoComponent } from './Componentes/Usuario/Empresa/modal-eliminar-empleado/modal-eliminar-empleado.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterCompanyPipe } from './pipes/filter-company.pipe';
import { FilterRequestPipe } from './pipes/filter-request.pipe';
import { FilterEmployeesPipe } from './pipes/filter-employees.pipe';
import { TablasCarrosDatosComponent } from './Componentes/Usuario/Carro/tablas-carros-datos/tablas-carros-datos.component';
import { FilterSensoresPipe } from './pipes/filter-sensores.pipe';
import { SpinnerComponent } from './Componentes/spinner/spinner.component';
import { FilterSensoresHoraPipe } from './pipes/filter-sensores-hora.pipe';

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
    AutosusuariodatosComponent,
    WildcardComponent,
    InstruccionesComponent,
    RolesModificarComponent,
    ModalActualizarNombreComponent,
    ModalActualizarCorreoComponent,
    ModalActualizarTelefonoComponent,
    ModalActualizarContrasenaComponent,
    ModalConfirmacionStatusComponent,
    EmpresaOpcionesComponent,
    AfilarEmpresaComponent,
    //SolicitudesEmpresasComponent,
    ModalRecuperarContrasenaComponent,
    //EmpresaAceptarEmpleadosComponent,
    VerEmpresasComponent,
    VerEmpleadosEmpresaComponent,
    BuscadorEmpresasComponent,
    EmpresaVerEmpleadosComponent,
    ModalDirreccionEmpresaComponent,
    ModalRechazarSolicitudEmpresaComponent,
    ModalDesactivarEmpresaComponent,
    ModalRechazarEmpleadoComponent,
    ModalEliminarEmpleadoComponent,
    FilterPipe,
    FilterCompanyPipe,
    FilterRequestPipe,
    FilterEmployeesPipe,
    TablasCarrosDatosComponent,
    FilterSensoresPipe,
    SpinnerComponent,
    FilterSensoresHoraPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    MatDialogModule,
    MatPaginatorModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}, { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
