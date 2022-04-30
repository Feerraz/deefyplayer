import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Musica } from '../services/model/musica';
import { MusicaService } from '../services/musica.service';
import { ApiService } from '../services/api.service';

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


  constructor(private musicaService: MusicaService, private route: ActivatedRoute) {
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
      console.log('validar')
      var musica = {
        "id": 0,
        "nomeMusica": this.NomeMusica,
        "arquivoMusica": this.ArquivoMusica,
        "artistaId": this.ArtistaId,
        "generoId": this.GeneroId,
        "dataInclusao": "2022-04-30T19:04:07.382Z"
      }

      if (this.id == 0){
        this.musicaService.criarMusica(musica).subscribe(() => {
          console.log('cadastrar')
          alert("Cadastrado com sucesso");

        });
      } else {
        this.musicaService.atualizarMusica(musica).subscribe(() => {
          console.log('atualizar')
          alert("Atualizado com sucesso");
        });


      }

    }
  }
}

