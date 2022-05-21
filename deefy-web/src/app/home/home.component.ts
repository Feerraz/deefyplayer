import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { Musica } from '../services/model/musica';
import { MusicaService } from '../services/musica.service';
import { ReproduzirMusicaService } from '../services/reproduzir-musica.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  musicas : Musica[] | any;
  constructor(private musicaService: MusicaService,
    private reproduzirMusicaService: ReproduzirMusicaService,
    private loginService : LoginService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.LoadSugestao();
    const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
  }


  LoadSugestao(){
    var usuario = this.loginService.getLocalUser();
    this.musicaService.buscarSugestao(usuario.id).subscribe(musicas =>{
      this.musicas = musicas;
      console.log(musicas)
    })
  }


  reproduzir(id: any){
    this.reproduzirMusicaService.reproduzir(Number(id))
  }

  }

