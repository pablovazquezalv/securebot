import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from './Componentes/Logeo/iniciosesion/iniciosesion.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { RegistrarseComponent } from './Componentes/Logeo/registrarse/registrarse.component';
import { CodigotelComponent } from './Componentes/Logeo/codigotel/codigotel.component';
const routes: Routes = [
  { path: '',redirectTo:'/inicio',pathMatch:'full' },
  {path:'inicio',component:InicioComponent},
  {path:'inicio-sesion',component:IniciosesionComponent},
  {path:'registrarse',component:RegistrarseComponent},
  {path:'codigo-telefono',component:CodigotelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
