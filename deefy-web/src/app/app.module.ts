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
import { LoginComponent } from './login/login.component';
import { GeneroComponent } from './genero/genero.component';
import { MusicaComponent } from './musica/musica.component';
import { ArtistaComponent } from './artista/artista.component';
import { AlbumComponent } from './album/album.component';
import { ReproduzirMusicaComponent } from './reproduzir-musica/reproduzir-musica.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { Component, OnInit } from '@angular/core';
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    GeneroComponent,
    MusicaComponent,
    ArtistaComponent,
    AlbumComponent,
    EditarUsuarioComponent,
    EditarAlbumComponent,
    EditarArtistaComponent,
    EditarGeneroComponent,
    EditarMusicaComponent,
    LoginComponent,
    ReproduzirMusicaComponent,
    CadastroComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class YoutubePlayerExampleModule { }
let apiLoaded = false;

