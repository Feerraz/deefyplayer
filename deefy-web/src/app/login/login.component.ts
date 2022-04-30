import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string = "";
  public senha: string = "";
  constructor(private router: Router, private loginService: LoginService) {
    var usuario = loginService.getLocalUser();
    if (usuario !=  undefined)
    router.navigate(["home"])
   }

  ngOnInit(): void {
  }

  entrar(){
    if (this.email != "" && this.senha != ""){
      this.loginService.Entrar(this.email, this.senha);
     } else {
       alert("e-mail ou senha inválidos");
     }
  }
}
