import { HttpClient, HttpHandler } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Usuario } from '../services/model/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  usuarios: Usuario[] | undefined;

  constructor(private usuarioService: UsuarioService, private router: Router) {

  }

  ngOnInit(): void {
    this.Load();
  }

  Load(){
    this.usuarioService.buscarUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  editar(id:any){
    this.router.navigate(['/editar-usuario', { id: id }]);
  }

  excluir(id: any){
    this.usuarioService.excluirUsuario(Number(id)).subscribe(() => {
      alert("Usuário excluido com sucesso");
      this.Load();
    });
  }
}
