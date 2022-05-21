import { HttpClient, HttpHandler } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Artista } from '../services/model/artista';
import { ArtistaService } from '../services/artista.service';
import { GeneroService } from '../services/genero.service';
import { Genero } from '../services/model/genero';
import { ArtistaDTO } from '../services/model/artistaDTO';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {

  artistas: ArtistaDTO[] | undefined;

  constructor(private artistaService: ArtistaService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.Load();
  }

  Load(){
    this.artistaService.buscarArtistas().subscribe(artistas => {
      this.artistas = artistas;
    });
  }

  editar(id:any){
    this.router.navigate(['/editar-artista', { id: id }]);
  }

  excluir(id: any){
    this.artistaService.excluirArtista(Number(id)).subscribe(() => {
      alert("Artista excluido com sucesso");
      this.Load();
    });
  }
}
