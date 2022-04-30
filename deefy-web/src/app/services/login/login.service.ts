import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  Entrar(email: string, senha: string){
    this.usuarioService.realizarLogin(email, senha).subscribe(usuario =>{

      if (usuario == undefined){
        this.router.navigate(["login"]);
      } else{
        localStorage.setItem("usuario", JSON.stringify(usuario));
        this.router.navigate(["home"]);
      }

    });

  }
  Sair(){
    localStorage.removeItem("usuario");
    this.router.navigate(["login"]);
  }

  getLocalUser(){
    var usuarioTxt = localStorage.getItem("usuario");
    if (usuarioTxt != undefined)
    return JSON.parse(usuarioTxt);
  }
}
