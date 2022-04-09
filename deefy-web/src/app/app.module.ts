import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { FormsModule } from '@angular/forms';
import { EditarAlbumComponent } from './editar-album/editar-album.component';
import { EditarArtistaComponent } from './editar-artista/editar-artista.component';
import { EditarGeneroComponent } from './editar-genero/editar-genero.component';
import { EditarMusicaComponent } from './editar-musica/editar-musica.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    EditarUsuarioComponent,
    EditarAlbumComponent,
    EditarArtistaComponent,
    EditarGeneroComponent,
    EditarMusicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
