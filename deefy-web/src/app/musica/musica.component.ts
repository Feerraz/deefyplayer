import { HttpClient, HttpHandler } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Musica } from '../services/model/musica';
import { MusicaService } from '../services/musica.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.scss']
})
export class MusicaComponent implements OnInit {

  musicas: Musica[] | undefined;

  constructor(private musicaService: MusicaService, private router: Router) {

  }

  ngOnInit(): void {
    this.Load();
  }

  Load(){
    this.musicaService.buscarMusicas().subscribe(musicas => {
      this.musicas = musicas;
      console.log(musicas)
    });
  }

  editar(id:any){
    this.router.navigate(['/editar-musica', { id: id }]);
  }

  excluir(id: any){
    this.musicaService.excluirMusica(Number(id)).subscribe(() => {
      alert("Musica excluida com sucesso");
      this.Load();
    });
  }
  reproduzir(id: any){
    this.router.navigate(['/reproduzirMusica', { id: id }]);

  }
}
