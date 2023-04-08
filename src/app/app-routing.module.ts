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
import { AutosusuariodatosComponent } from './Componentes/Usuario/Usuario/autosusuariodatos/autosusuariodatos.component';
import { WildcardComponent } from './Componentes/wildcard/wildcard.component';
import { EmpresaOpcionesComponent } from './Componentes/Usuario/Empresa/empresa-opciones/empresa-opciones.component';
import { AfilarEmpresaComponent } from './Componentes/Usuario/Empresa/afilar-empresa/afilar-empresa.component';
import { SolicitudesEmpresasComponent } from './Componentes/Admin/solicitudes-empresas/solicitudes-empresas.component';
import { EmpresaAceptarEmpleadosComponent } from './Componentes/Usuario/Empresa/empresa-aceptar-empleados/empresa-aceptar-empleados.component';
import { EmpresaVerEmpleadosComponent } from './Componentes/Usuario/Empresa/empresa-ver-empleados/empresa-ver-empleados.component';
import { VerEmpresasComponent } from './Componentes/Admin/ver-empresas/ver-empresas.component';
import { VerEmpleadosEmpresaComponent } from './Componentes/Admin/ver-empleados-empresa/ver-empleados-empresa.component';
const routes: Routes = [
  { path: '', redirectTo:'/inicio', pathMatch:'full' },
  //LOGEO
  { path: 'inicio', component: InicioComponent, title: 'Inicio - SecureBot' },
  { path:'login', component:IniciosesionComponent, title: 'Iniciar sesión' },
  { path: 'registrarse', component:RegistrarseComponent, title: 'Registro' },
  { path:'instrucciones', component:InstruccionesComponent, title:'Instrucciones' },
  { path:'code-verify', component:CodigotelComponent, title: 'Verificar código' },

   //ADMINISTRADOR
   { path:'users', component:VerusuariosComponent, title: 'Usuarios'},
   {path:'empresas',component:VerEmpresasComponent, title: 'Empresas'},
   {path:'empleados-empresa',component:VerEmpleadosEmpresaComponent, title: 'Empleados de empresa'},
   {path:'solicitudes-empresa',component:SolicitudesEmpresasComponent, title: 'Solicitudes de empleados'},
   
  
    //DUEÑO DE EMPRESA
  {path:'aceptar-empleados',component:EmpresaAceptarEmpleadosComponent, title: 'Aceptar empleados'},
  {path:'ver-empleados',component:EmpresaVerEmpleadosComponent, title: 'Ver empleados'},

   //EMPLEADO
   {path: 'profile', component:PerfilusuarioComponent, title: 'Mi perfil' },
   {path:'empresa-usuario',component:EmpresausuarioComponent, title: 'Mi empresa'},
   {path:'empresa-opciones',component:EmpresaOpcionesComponent, title: 'Crea o Afiliate'},
   {path:'crear-empresa',component:CrearempresaComponent, title: 'Crear empresa'}, 
   {path:'afiliar-empresa',component:AfilarEmpresaComponent, title: 'Afiliar empresa'},
 
   {path:'autos-usuario',component:AutosusuariodatosComponent},
   {path:'tipos-carros',component:TiposcarrosComponent},
   {path:'crear-carro',component:CrearcarroComponent},
   {path:'ver-carro-especifico',component:VercarroespecificoComponent},

  
  { path:'**', component: WildcardComponent, title: 'Página no encontrada' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
