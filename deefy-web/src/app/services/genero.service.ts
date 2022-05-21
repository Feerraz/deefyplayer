import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Genero } from './model/genero'

@Injectable({
  providedIn: 'root'
})
export class GeneroService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }
  buscarGeneros(){
    return this.get<Genero[]>(this.url + "Genero");
  }
  buscarGenero(id: number){
    return this.get<Genero>(this.url + "Genero/" + id);
}
  atualizarGenero(genero: Genero){
  return this.put(this.url + "Genero/" + genero.id, genero);
}
  criarGenero(genero: Genero){
  return this.post(this.url + "Genero", genero);
}
  excluirGenero(id: number){
  return this.delete(this.url + "Genero/" + id);
}

}

