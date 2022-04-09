import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AlbumComponent } from './album/album.component';
import { ArtistaComponent } from './artista/artista.component';
import { GeneroComponent } from './genero/genero.component';
import { MusicaComponent } from './musica/musica.component';

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
  {path: 'musica', component: MusicaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
