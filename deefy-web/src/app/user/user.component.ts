import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Usuario } from '../services/model/usuario';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  usuarios: Usuario[] | undefined

  constructor(private apiServices: ApiService) { }

  ngOnInit(): void {
    this.apiServices.getUsuario().subscribe(usuarios =>{
      this.usuarios = usuarios;
    });

  }

}
