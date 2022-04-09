import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Musica } from './model/musica'

@Injectable({
  providedIn: 'root'
})
export class MusicaService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }
  buscarMusica(){
    return this.get<Musica[]>(this.url + "Musica");
  }
  Musica(id: number){
    return this.get<Musica>(this.url + "Musica/" + id);
}
  atualizarGenero(musica: Musica){
  return this.put(this.url + "Musica/" + musica.id, musica);
}
  criarMusica(musica: Musica){
  return this.post(this.url + "Musica", musica);
}
  excluirMusica(id: number){
  return this.delete(this.url + "Musica/" + id);
}

}

