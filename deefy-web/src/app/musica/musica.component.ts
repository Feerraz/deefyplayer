import { HttpClient, HttpHandler } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Musica } from '../services/model/musica';
import { MusicaService } from '../services/musica.service';
import { MusicaDTO } from '../services/model/musicaDTO';
import { SugestaoMusica } from '../services/model/sugestao';
import { LoginService } from '../services/login/login.service';
import { ReproduzirMusicaComponent } from '../reproduzir-musica/reproduzir-musica.component';
import { ReproduzirMusicaService } from '../services/reproduzir-musica.service';


@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.scss']
})
export class MusicaComponent implements OnInit {

  musicas: MusicaDTO[] | undefined;

  constructor(private musicaService: MusicaService,
    private loginService: LoginService,
    private reproduzirMusicaService: ReproduzirMusicaService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.Load();
  }

  Load(){
    this.musicaService.buscarMusicas().subscribe(musicas => {
      this.musicas = musicas;
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
    this.reproduzirMusicaService.reproduzir(Number(id))
  }

  }

