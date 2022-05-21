import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genero } from '../services/model/genero';
import { GeneroService } from '../services/genero.service';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.scss']
})
export class EditarGeneroComponent implements OnInit {

  id: number = 0
  Nome: string | undefined;
  Descricao: string | undefined;


  constructor(private generoService: GeneroService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));

      if (this.id > 0){
        this.generoService.buscarGenero(this.id).subscribe(genero => {
          this.Nome = genero.nome,
          this.Descricao = genero.descricao;

        });
      }else {
        this.id = 0;
      }
    })
   }
  ngOnInit(): void {
    this.Nome = "";
    this.Descricao = "";
  }
  validar(): boolean {
    if (this.Nome == ""){
      alert("Informe um nome válido");
      return false;
    }

    if (this.Descricao == ""){
      alert("Descrição inválida");
      return false;
    }
    return true;
  }
  salvar(){
    console.log('salvar')
    if (this.validar()){
      console.log('validar')
      var genero = new Genero();
      genero.id = 0;
      genero.nome = this.Nome;
      genero.descricao = this.Descricao;
      genero.dataInclusao = new Date();

      if (this.id == 0){
        this.generoService.criarGenero(genero).subscribe(() => {
          alert("Cadastrado com sucesso");

        });
      } else {
        genero.id = this.id;
        this.generoService.atualizarGenero(genero).subscribe(() => {
          alert("Atualizado com sucesso");
        });


      }

    }
  }
}

