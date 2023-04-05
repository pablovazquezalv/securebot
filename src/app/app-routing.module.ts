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
import { PerfilusuarioComponent } from './Componentes/Usuario/perfilusuario/perfilusuario.component';
import { EmpresausuarioComponent } from './Componentes/Usuario/empresausuario/empresausuario.component';
import { CrearempresaComponent } from './Componentes/Usuario/Empresa/crearempresa/crearempresa.component';
import { VercarroespecificoComponent } from './Componentes/Usuario/Carro/vercarroespecifico/vercarroespecifico.component';
import { AutosusuariodatosComponent } from './Componentes/Usuario/autosusuariodatos/autosusuariodatos.component';

import { WildcardComponent } from './Componentes/wildcard/wildcard.component';
const routes: Routes = [
  { path: '', redirectTo:'/inicio', pathMatch:'full' },
  //LOGEO
  { path: 'inicio', component: InicioComponent, title: 'Inicio - SecureBot' },
  { path:'login', component:IniciosesionComponent, title: 'Iniciar sesión' },
  { path: 'registrarse', component:RegistrarseComponent, title: 'Registro' },
  {path:'instrucciones',component:InstruccionesComponent,title:'Instrucciones'},
  { path:'code-verify', component:CodigotelComponent, title: 'Verificar código' },
  
  //USUARIO
  {path:'perfil-usuario',component:PerfilusuarioComponent},
  {path:'ver-usuarios',component:VerusuariosComponent},
  {path:'autos-usuario',component:AutosusuariodatosComponent},
  {path:'tipos-carros',component:TiposcarrosComponent},
  {path:'crear-carro',component:CrearcarroComponent},
  {path:'ver-carro-especifico',component:VercarroespecificoComponent},
  {path:'empresa-usuario',component:EmpresausuarioComponent},
  {path:'crear-empresa',component:CrearempresaComponent},

  {path:'**',component:WildcardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
