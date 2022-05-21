import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';
import { MusicaDTO } from './model/musicaDTO';
import { SugestaoMusica } from './model/sugestao';
import { MusicaService } from './musica.service';

@Injectable({
  providedIn: 'root'
})
export class ReproduzirMusicaService {
  musicas: MusicaDTO[] | undefined;

  constructor(private musicaService: MusicaService,
    private loginService: LoginService,
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
  reproduzir(id: any){
    var sugestao = new SugestaoMusica();
    sugestao.id = 0;
    sugestao.idMusica = id;
    var usuario =  this.loginService.getLocalUser();
    sugestao.idUsuario = usuario.id;
    sugestao.dataClick = new Date();

    this.musicaService.inserirSugestao(sugestao).subscribe(sugestao => {

      this.router.navigate(['/reproduzirMusica', { id: id }]);
    })

  }
}
