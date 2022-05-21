import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Artista } from './model/artista'
import { ArtistaDTO } from './model/artistaDTO';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }
  buscarArtistas(){
    return this.get<ArtistaDTO[]>(this.url + "Artista");
  }
  buscarArtista(id: number){
    return this.get<Artista>(this.url + "Artista/" + id);
}
  atualizarArtista(artista: Artista){
  return this.put(this.url + "Artista/" + artista.id, artista);
}
  criarArtista(artista: Artista){
  return this.post(this.url + "Artista", artista);
}
  excluirArtista(id: number){
  return this.delete(this.url + "Artista/" + id);
}

}

