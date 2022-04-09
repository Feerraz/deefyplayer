import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Usuario } from './model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  buscarUsuarios(){
    return this.get<Usuario[]>(this.url + "Usuario");
  }

  buscarUsuario(id: number){
    return this.get<Usuario>(this.url + "Usuario/" + id);
  }

  atualizarUsuario(usuario: Usuario){
    return this.put(this.url + "Usuario/" + usuario.id, usuario);
  }

  criarUsuario(usuario: Usuario){
    return this.post(this.url + "Usuario", usuario);
  }

  excluirUsuario(id: number){
    return this.delete(this.url + "Usuario/" + id);
  }
}
