import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspacioMedioComponent } from './componente/espacio-medio/espacio-medio.component';
import { GalloWinComponent } from './componente/gallo-win/gallo-win.component';
import { NoEncontradoComponent } from './componente/no-encontrado/no-encontrado.component';
import { GalloNacionalComponent } from './componente/gallo-nacional/gallo-nacional.component';
import { LoginComponent } from './componente/login/login.component';
import { MelateComponent } from './componente/melate/melate.component';
import { TrisComponent } from './componente/tris/tris.component';
import { RetroComponent } from './componente/retro/retro.component';
import { ChispazoComponent } from './componente/chispazo/chispazo.component';
import { RegistrarseComponent } from './componente/registrarse/registrarse.component';
import { GanagatoComponent } from './componente/ganagato/ganagato.component';
import { ResultadosComponent } from './componente/resultados/resultados.component';


const routes: Routes = [
  { path: '', component: EspacioMedioComponent },
  { path: 'gallowin', component: GalloWinComponent },
  { path: 'gallonacional', component: GalloNacionalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'melate', component: MelateComponent },
  { path: 'tris', component: TrisComponent },
  { path: 'retro', component: RetroComponent },
  { path: 'chispazo', component: ChispazoComponent },
  {path:'login',component:LoginComponent},
  {path:'registrarse',component:RegistrarseComponent},
  {path:'ganagato',component:GanagatoComponent},
  {path:'resultados',component:ResultadosComponent},
  { path: '**', component: NoEncontradoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
