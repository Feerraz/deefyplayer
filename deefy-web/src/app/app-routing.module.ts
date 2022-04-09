import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AlbumComponent } from './album/album.component';
import { ArtistaComponent } from './artista/artista.component';
import { GeneroComponent } from './genero/genero.component';
import { MusicaComponent } from './musica/musica.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { EditarAlbumComponent } from './editar-album/editar-album.component';
import { EditarArtistaComponent } from './editar-artista/editar-artista.component';
import { EditarGeneroComponent } from './editar-genero/editar-genero.component';
import { EditarMusicaComponent } from './editar-musica/editar-musica.component';

const routes: Routes = [{
  path: '',
  redirectTo:'home',
  pathMatch:'full'
},
  { path: 'home', component: HomeComponent },
  {path: 'user', component: UserComponent},
  {path: 'album', component: AlbumComponent},
  {path: 'artista', component: ArtistaComponent},
  {path: 'genero', component: GeneroComponent},
  {path: 'musica', component: MusicaComponent},
  {path: 'editar-usuario', component: EditarUsuarioComponent},
  {path: 'editar-album', component: EditarAlbumComponent},
  {path: 'editar-artista', component: EditarArtistaComponent},
  {path: 'editar-genero', component: EditarGeneroComponent},
  {path: 'editar-musica', component: EditarMusicaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
