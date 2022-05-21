import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Musica } from './model/musica';
import { MusicaDTO } from './model/musicaDTO';
import { SugestaoMusica } from './model/sugestao';

@Injectable({
  providedIn: 'root'
})
export class MusicaService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  buscarMusicas(){
    return this.get<MusicaDTO[]>(this.url + "Musica");
  }

  buscarMusica(id: number){
    return this.get<Musica>(this.url + "Musica/" + id);
  }

  atualizarMusica(musica: any){
    return this.put(this.url + "Musica/" + musica.id, musica);
  }

  criarMusica(musica: any){
    return this.post(this.url + "Musica", musica);
  }

  excluirMusica(id: number){
    return this.delete(this.url + "Musica/" + id);
  }

  inserirSugestao(sugestao : any){
    return this.post(this.url + "Musica/InserirSugestao/", sugestao);
  }
  buscarSugestao(id : number){
    return this.get(this.url + "Musica/Sugestoes/Usuario/" + id);
  }
}
