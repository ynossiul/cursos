import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ComponenteComponent } from './componente/componente.component';
import { CabeceroComponent } from './componente/cabecero/cabecero.component';
import { PiePaginaComponent } from './componente/pie-pagina/pie-pagina.component';
import { EspacioMedioComponent } from './componente/espacio-medio/espacio-medio.component';
import { GalloWinComponent } from './componente/gallo-win/gallo-win.component';
import { NoEncontradoComponent } from './componente/no-encontrado/no-encontrado.component';
import { GalloNacionalComponent } from './componente/gallo-nacional/gallo-nacional.component';
import { LoginComponent } from './componente/login/login.component';
import { TrisComponent } from './componente/tris/tris.component';
import { MelateComponent } from './componente/melate/melate.component';
import { RetroComponent } from './componente/retro/retro.component';
import { ChispazoComponent } from './componente/chispazo/chispazo.component';
import { RegistrarseComponent } from './componente/registrarse/registrarse.component';
import { AnuncioComponent } from './componente/anuncio/anuncio.component';
import { GanagatoComponent } from './componente/ganagato/ganagato.component';
import { ResultadosComponent } from './componente/resultados/resultados.component';
import { Estados } from './servicios/estados-service';

@NgModule({
  declarations: [
    AppComponent,
    //ComponenteComponent,
    CabeceroComponent,
    PiePaginaComponent,
    EspacioMedioComponent,
    GalloWinComponent,
    NoEncontradoComponent,
    GalloNacionalComponent,
    LoginComponent,
    TrisComponent,
    MelateComponent,
    RetroComponent,
    ChispazoComponent,
    RegistrarseComponent,
    AnuncioComponent,
    GanagatoComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Estados],
  bootstrap: [AppComponent]
})
export class AppModule { }
