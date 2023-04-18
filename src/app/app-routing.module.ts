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
//Guards
import { RolesGuard } from './Guards/roles.guard';
const routes: Routes = [
  { path: '', redirectTo:'/inicio', pathMatch:'full' },
  
  { path: 'inicio', component: InicioComponent, title: 'Inicio - SecureBot' },
  { path: 'conocenos', component: TiposcarrosComponent, title: 'Conócenos' },
    //LOGEO
  { path:'login', component: IniciosesionComponent, title: 'Iniciar sesión' },
  { path: 'registrarse', component: RegistrarseComponent, title: 'Registro' },
  { path: 'instrucciones', component: InstruccionesComponent, title: 'Instrucciones' },
  { path: 'code-verify', component: CodigotelComponent, title: 'Verificar cuenta' },

   //ADMINISTRADOR
  { path:'users', component: VerusuariosComponent, title: 'Usuarios',canActivate: [RolesGuard], data: {expectedRole: [1]} },
  { path: 'empresas', component: VerEmpresasComponent, title: 'Empresas',canActivate: [RolesGuard], data: {expectedRole: [1]} },
  { path: 'empleados-empresa/:id', component:VerEmpleadosEmpresaComponent, title: 'Empleados de empresa',canActivate: [RolesGuard], data: {expectedRole: [1]} },
  { path: 'solicitudes-empresa', component: SolicitudesEmpresasComponent, title: 'Solicitudes de empresas',canActivate: [RolesGuard], data: {expectedRole: [1]} },
   
    //DUEÑO DE EMPRESA
  { path: 'solicitudes-empleados', component: EmpresaAceptarEmpleadosComponent, title: 'Solicitudes de empleados',canActivate: [RolesGuard], data: {expectedRole: [3]} },
  { path: 'empleados', component: EmpresaVerEmpleadosComponent, title: 'Ver empleados',canActivate: [RolesGuard], data: {expectedRole: [3]} },

   //EMPLEADO
  { path: 'profile', component: PerfilusuarioComponent, title: 'Mi perfil',canActivate: [RolesGuard], data: {expectedRole: [1,2,3,4]} },
  { path: 'empresa-usuario', component: EmpresausuarioComponent, title: 'Mi empresa',canActivate: [RolesGuard], data: {expectedRole: [1,2,3,4]} },
  { path: 'mi-empresa', component: EmpresaOpcionesComponent, title: 'Mi empresa',canActivate: [RolesGuard], data: {expectedRole: [1,2,3,4]} },
  { path: 'crear-empresa', component: CrearempresaComponent, title: 'Crear empresa',canActivate: [RolesGuard], data: {expectedRole: [1,2,3,4]}  }, 
  { path: 'afiliar-empresa', component: AfilarEmpresaComponent, title: 'Afiliarme a empresa',canActivate: [RolesGuard], data: {expectedRole: [1,2,3,4]}  },

  {path:'autos-usuario',component:AutosusuariodatosComponent},
  {path:'crear-carro',component:CrearcarroComponent},
  {path:'ver-carro-especifico',component:VercarroespecificoComponent},

  { path:'**', component: WildcardComponent, title: 'Página no encontrada' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
