import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Musica } from '../services/model/musica';
import { MusicaService } from '../services/musica.service';
import { ApiService } from '../services/api.service';
import { Artista } from '../services/model/artista';
import { ArtistaComponent } from '../artista/artista.component';
import { ArtistaService } from '../services/artista.service';
import { GeneroService } from '../services/genero.service';
import { Genero } from '../services/model/genero';

@Component({
  selector: 'app-editar-musica',
  templateUrl: './editar-musica.component.html',
  styleUrls: ['./editar-musica.component.scss']
})

export class EditarMusicaComponent implements OnInit {

  id: number = 0
  NomeMusica : string | undefined
  ArquivoMusica : string | undefined
  ArtistaId : number = 0
  GeneroId : number = 0
  artistas : Artista[] | undefined
  generos : Genero[] | undefined

  constructor(private musicaService: MusicaService,
              private route: ActivatedRoute,
              private generoService: GeneroService,
              private artistaService: ArtistaService) {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));

      if (this.id > 0){
        this.musicaService.buscarMusica(this.id).subscribe(musica => {
          this.NomeMusica = musica.nomeMusica,
          this.ArquivoMusica = musica.arquivoMusica,
          this.ArtistaId = Number(musica.artistaId),
          this.GeneroId = Number(musica.generoId)


        });
      }else {
        this.id = 0;
      }
    })
    this.buscarArtistas();
    this.buscarGeneros();
   }


  ngOnInit(): void {
    this.NomeMusica = "";
    this.ArquivoMusica = "";
    this.ArtistaId = 0;
    this.GeneroId = 0;
  }


  validar(): boolean {
    if (this.NomeMusica == ""){
      alert("Informe um nome válido");
      return false;
    }

    if (this.ArquivoMusica == ""){
      alert("Arquivo inválido");
      return false;
    }

    if (this.GeneroId == 0){
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
      var musica = new Musica();
      musica.id = 0;
      musica.arquivoMusica = this.ArquivoMusica;
      musica.nomeMusica = this.NomeMusica;
      musica.artistaId = Number(this.ArtistaId);
      musica.generoId = Number(this.GeneroId);
      musica.dataInclusao = new Date();

      if (this.id == 0){
        this.musicaService.criarMusica(musica).subscribe(() => {
          alert("Cadastrado com sucesso");

        });
      } else {
        musica.id = this.id;
        this.musicaService.atualizarMusica(musica).subscribe(() => {
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
