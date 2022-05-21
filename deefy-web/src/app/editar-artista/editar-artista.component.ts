import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Artista } from '../services/model/artista';
import { ArtistaService } from '../services/artista.service';
import { GeneroService } from '../services/genero.service';
import { Genero } from '../services/model/genero';
@Component({
  selector: 'app-editar-artista',
  templateUrl: './editar-artista.component.html',
  styleUrls: ['./editar-artista.component.scss']
})
export class EditarArtistaComponent implements OnInit {

  id: number = 0
  Nome: string | undefined;
  GeneroId : number = 0;
  generos : Genero[] | undefined

  constructor(private artistaService: ArtistaService,
    private generoService: GeneroService,
    private route: ActivatedRoute){
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));

      if (this.id > 0){
        this.artistaService.buscarArtista(this.id).subscribe(artista => {
          this.Nome = artista.nome;
          this.GeneroId = Number(artista.generoId)

        });
      }else {
        this.id = 0;
      }
    })
    this.buscarGeneros();
   }

  ngOnInit(): void {
    this.Nome = "";
    this.GeneroId = 0;
  }
  validar(): boolean {
    if (this.Nome == ""){
      alert("Informe um nome válido");
      return false;
    }
    if (this.GeneroId == 0){
      alert("Gênero inválido");
      return false;
    }
    return true;
  }
  salvar(){
    console.log('salvar')
    if (this.validar()){
      console.log('validar')
      var artista = new Artista();
      artista.id = 0;
      artista.nome = this.Nome;
      artista.generoId = Number(this.GeneroId);
      artista.dataInclusao = new Date();

      if (this.id == 0){
        this.artistaService.criarArtista(artista).subscribe(() => {
          alert("Cadastrado com sucesso");

        });
      } else {
        artista.id = this.id;
        this.artistaService.atualizarArtista(artista).subscribe(() => {
          alert("Atualizado com sucesso");
        });


      }

    }
  }
  buscarGeneros(){
    this.generoService.buscarGeneros().subscribe(generos => {
      this.generos = generos
    })
  }

}

