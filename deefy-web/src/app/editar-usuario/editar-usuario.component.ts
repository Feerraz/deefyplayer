import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Usuario } from '../services/model/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  id: number = 0;
  nome: string | undefined;
  email: string | undefined;
  senha: string | undefined;

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));

      if (this.id > 0){
        this.usuarioService.buscarUsuario(this.id).subscribe(usuario => {
          this.nome = usuario.nome,
          this.email = usuario.email,
          this.senha = usuario.senha
        });
      }
    })
   }

  ngOnInit(): void {
    this.email = "";
    this.nome = "";
    this.senha = "";
  }

  validar(): boolean {
    if (this.nome == ""){
      alert("Informe um nome válido");
      return false;
    }

    if (this.email == ""){
      alert("email inválido");
      return false;
    }

    if (this.senha == ""){
      alert("senha inválida");
      return false;
    }

    return true;
  }

  salvar(){
    if (this.validar()){
      var usuario = new Usuario();
      usuario.id = this.id;
      usuario.nome = this.nome;
      usuario.email = this.email;
      usuario.senha = this.senha;
      usuario.dataInclusao = new Date();

      if (this.id == 0){
        this.usuarioService.criarUsuario(usuario).subscribe(() => {
          alert("Cadastrado com sucesso");
        });
      } else {
        this.usuarioService.atualizarUsuario(usuario).subscribe(() => {
          alert("Atualizado com sucesso");
        });
      }

    }
  }
}
