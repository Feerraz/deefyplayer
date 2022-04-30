import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { EditarAlbumComponent } from '../editar-album/editar-album.component';
import { AlbumService } from '../services/album.service';
import { EditarGeneroComponent } from '../editar-genero/editar-genero.component';
import { GeneroService } from '../services/genero.service';
import { EditarMusicaComponent } from '../editar-musica/editar-musica.component';
import { MusicaService } from '../services/musica.service';
import { EditarArtistaComponent } from '../editar-artista/editar-artista.component';
import { ArtistaService } from '../services/artista.service';
import { Usuario } from '../services/model/usuario';
import { UsuarioService } from '../services/usuario.service';
import { Musica } from '../services/model/musica';
import { Album } from '../services/model/album';
import { Artista } from '../services/model/artista';
import { Genero } from '../services/model/genero';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  usuarios: Usuario [] | undefined
  musicas: Musica [] | undefined
  albuns: Album [] | undefined
  artistas: Artista [] | undefined
  generos: Genero [] | undefined
  constructor(private router: Router, public usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  editarUsuario(id:any){
    this.router.navigate(['/editar-usuario', { id: id }]);
  }
  editarMusica(id:any){
    this.router.navigate(['/editar-musica', { id: id }]);
  }
  editarAlbum(id:any){
    this.router.navigate(['/editar-album', { id: id }]);
  }
  editarArtista(id:any){
    this.router.navigate(['/editar-artista', { id: id }]);
  }
  editarGenero(id:any){
    this.router.navigate(['/editar-genero', { id: id }]);
  }

}
