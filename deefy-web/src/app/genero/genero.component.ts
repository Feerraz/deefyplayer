import { HttpClient, HttpHandler } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Genero } from '../services/model/genero';
import { GeneroService } from '../services/genero.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.scss']
})
export class GeneroComponent implements OnInit {

  public generos: Genero[] | undefined;

  constructor(private generoService: GeneroService, private router: Router) {

  }

  ngOnInit(): void {
    this.Load();
  }

  Load(){
    this.generoService.buscarGeneros().subscribe(generos => {
      console.log(generos);
      this.generos = generos;
    });
  }

  editar(id:any){
    this.router.navigate(['/editar-genero', { id: id }]);
  }

  excluir(id: any){
    this.generoService.excluirGenero(Number(id)).subscribe(() => {
      alert("Genero excluido com sucesso");
      this.Load();
    });
  }
}
