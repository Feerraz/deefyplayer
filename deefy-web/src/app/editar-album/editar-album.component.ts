import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Album } from '../services/model/album';
import { AlbumService } from '../services/album.service';
import { Artista } from '../services/model/artista';
import { ArtistaComponent } from '../artista/artista.component';
import { ArtistaService } from '../services/artista.service';
import { GeneroService } from '../services/genero.service';
import { Genero } from '../services/model/genero';
@Component({
  selector: 'app-editar-album',
  templateUrl: './editar-album.component.html',
  styleUrls: ['./editar-album.component.scss']
})
export class EditarAlbumComponent implements OnInit {
  id: number = 0
  Titulo: string | undefined;
  DataLancamento: Date | undefined;
  ArtistaId : number = 0
  GeneroId : number = 0
  artistas : Artista[] | undefined
  generos : Genero[] | undefined

  constructor(private albumService: AlbumService,
    private generoService: GeneroService,
    private artistaService: ArtistaService,
    private route: ActivatedRoute){
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));

      if (this.id > 0){
        this.albumService.buscarAlbum(this.id).subscribe(album => {
          this.Titulo = album.titulo,
          this.ArtistaId = Number(album.artistaId),
          this.GeneroId = Number(album.generoId);

        });
      }else {
        this.id = 0;
      }
    })
    this.buscarArtistas();
    this.buscarGeneros();
   }

  ngOnInit(): void {
    this.Titulo = "";
    this.ArtistaId = 0;
    this.GeneroId = 0;
  }
  validar(): boolean {
    if (this.Titulo == ""){
      alert("Informe um título válido");
      return false;
    }if (this.GeneroId == 0){
      alert("Gênero inválido");
      return false;
    }
    if (this.ArtistaId == 0){
      alert("Artista inválido");
      return false;
    }
    return true;
  }
  salvar(){
    console.log('salvar')
    if (this.validar()){
      console.log('validar')
      var album = new Album();
      album.id = 0;
      album.titulo = this.Titulo;
      album.dataInclusao = new Date();
      album.artistaId = Number(this.ArtistaId);
      album.generoId = Number(this.GeneroId);
      album.DataLancamento = this.DataLancamento;


      if (this.id == 0){
        this.albumService.criarAlbum(album).subscribe(() => {
          alert("Cadastrado com sucesso");

        });
      } else {
        album.id = this.id;
        this.albumService.atualizarAlbum(album).subscribe(() => {
          alert("Atualizado com sucesso");
        });


      }

    }
  }
  buscarArtistas(){
    this.artistaService.buscarArtistas().subscribe(artistas => {
      this.artistas = artistas
    });
  }
  buscarGeneros(){
    this.generoService.buscarGeneros().subscribe(generos => {
      this.generos = generos
    })
  }

}

