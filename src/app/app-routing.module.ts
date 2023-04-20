import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IniciosesionComponent } from './Componentes/Logeo/iniciosesion/iniciosesion.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { RegistrarseComponent } from './Componentes/Logeo/registrarse/registrarse.component';
import { InstruccionesComponent } from './Componentes/Logeo/instrucciones/instrucciones.component';
import { CodigotelComponent } from './Componentes/Logeo/codigotel/codigotel.component';
import { VerusuariosComponent } from './Componentes/Admin/administrar_usuarios/verusuarios/verusuarios.component';
import { TiposcarrosComponent } from './Componentes/Usuario/Carro/tiposcarros/tiposcarros.component';
import {CrearcarroComponent} from './Componentes/Usuario/Carro/crearcarro/crearcarro.component';
import { PerfilusuarioComponent } from './Componentes/Usuario/Usuario/perfilusuario/perfilusuario.component';
import { EmpresausuarioComponent } from './Componentes/Usuario/Usuario/empresausuario/empresausuario.component';
import { CrearempresaComponent } from './Componentes/Usuario/Empresa/crearempresa/crearempresa.component';
import { VercarroespecificoComponent } from './Componentes/Usuario/Carro/vercarroespecifico/vercarroespecifico.component';
import { AutosusuariodatosComponent } from './Componentes/Usuario/Empresa/autos-empresa-datos/autosusuariodatos.component';
import { WildcardComponent } from './Componentes/wildcard/wildcard.component';
import { EmpresaOpcionesComponent } from './Componentes/Usuario/Empresa/empresa-opciones/empresa-opciones.component';
import { AfilarEmpresaComponent } from './Componentes/Usuario/Empresa/afilar-empresa/afilar-empresa.component';
import { SolicitudesEmpresasComponent } from './Componentes/Admin/solicitudes-empresas/solicitudes-empresas.component';
import { EmpresaAceptarEmpleadosComponent } from './Componentes/Usuario/Empresa/empresa-aceptar-empleados/empresa-aceptar-empleados.component';
import { EmpresaVerEmpleadosComponent } from './Componentes/Usuario/Empresa/empresa-ver-empleados/empresa-ver-empleados.component';
import { VerEmpresasComponent } from './Componentes/Admin/ver-empresas/ver-empresas.component';
import { VerEmpleadosEmpresaComponent } from './Componentes/Admin/ver-empleados-empresa/ver-empleados-empresa.component';
import { ModalRechazarSolicitudEmpresaComponent } from './Componentes/Admin/modal-rechazar-solicitud-empresa/modal-rechazar-solicitud-empresa.component';
import { TablasCarrosDatosComponent } from './Componentes/Usuario/Carro/tablas-carros-datos/tablas-carros-datos.component';

//Guards
import { LoginGuard } from './Guards/login.guard';
import { RoleGuard } from './Guards/role.guard';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo:'/inicio', pathMatch:'full' },
  
  { path: 'inicio', component: InicioComponent, title: 'Inicio - SecureBot' },
  { path: 'conocenos', component: TiposcarrosComponent, title: 'Conócenos' },
    //LOGEO
  { path:'login', component: IniciosesionComponent, title: 'Iniciar sesión', canActivate: [LoginGuard] },
  { path: 'registrarse', component: RegistrarseComponent, title: 'Registro', canActivate: [LoginGuard] },
  { path: 'instrucciones', component: InstruccionesComponent, title: 'Instrucciones', canActivate: [LoginGuard] },
  { path: 'code-verify', component: CodigotelComponent, title: 'Verificar cuenta', canActivate: [LoginGuard] },

   //ADMINISTRADOR
  { path:'users', component: VerusuariosComponent, title: 'Usuarios', canActivate: [AuthGuard, RoleGuard], data: { roles: [1] } },
  { path: 'empresas', component: VerEmpresasComponent, title: 'Empresas', canActivate: [AuthGuard, RoleGuard], data: { roles: [1] } },
  { path: 'empleados-empresa/:id', component:VerEmpleadosEmpresaComponent, title: 'Empleados de empresa', canActivate: [AuthGuard, RoleGuard], data: { roles: [1] } },
  { path: 'solicitudes-empresa', component: SolicitudesEmpresasComponent, title: 'Solicitudes de empresas', canActivate: [AuthGuard ,RoleGuard], data: { roles: [1] } },
   
    //DUEÑO DE EMPRESA
  { path: 'solicitudes-empleados', component: EmpresaAceptarEmpleadosComponent, title: 'Solicitudes de empleados', canActivate: [AuthGuard, RoleGuard], data: { roles: [1, 2] } },
  { path: 'empleados', component: EmpresaVerEmpleadosComponent, title: 'Ver empleados', canActivate: [AuthGuard, RoleGuard], data: { roles: [1, 2] } },

   //EMPLEADO
  { path: 'profile', component: PerfilusuarioComponent, title: 'Mi perfil', canActivate: [AuthGuard, RoleGuard], data: { roles: [1, 2, 3, 4] } },
  { path: 'empresa-usuario', component: EmpresausuarioComponent, title: 'Mi empresa', canActivate: [AuthGuard, RoleGuard], data: { roles: [1, 2, 3, 4] }},
  { path: 'mi-empresa', component: EmpresaOpcionesComponent, title: 'Mi empresa', canActivate: [AuthGuard, RoleGuard], data: { roles: [1, 2, 3, 4] }},
  { path: 'crear-empresa', component: CrearempresaComponent, title: 'Crear empresa', canActivate: [AuthGuard, RoleGuard], data: { roles: [1, 2, 3, 4] }}, 
  { path: 'afiliar-empresa', component: AfilarEmpresaComponent, title: 'Afiliarme a empresa', canActivate: [AuthGuard, RoleGuard], data: { roles: [1, 2, 3, 4] } },

  //VER LOS CARRITOS
  {path:'autos-usuario',component:AutosusuariodatosComponent,title:'Autos empresa'},
  //CREAR CARRITOS
  {path:'crear-carro',component:CrearcarroComponent,title:'Crear carro'},
  //VER CARRITOS ESPECIFICOS
  {path:'ver-carro-especifico',component:VercarroespecificoComponent,title:'Ver carro especifico'},
  //VER DATOS DE LOS CARRITOS (TABLA)
  {path:'ver-datos-carro',component:TablasCarrosDatosComponent},
  { path:'**', component: WildcardComponent, title: 'Página no encontrada' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
