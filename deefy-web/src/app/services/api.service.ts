import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './model/usuario';
import { Genero } from './model/genero';
import { Album } from './model/album';
import { Artista } from './model/artista';
import { Musica } from './model/musica';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getMusica() {
    return this.get<Musica[]>(this.url + "Musica");
  }

  private url = "https://localhost:5001/api/"
  constructor(private http:HttpClient) { }

  getUsuario(){
    return this.get<Usuario[]>(this.url + "Usuario");
  }

  getGenero(){
    return this.get<Genero[]>(this.url + "Genero");
  }

  getArtista(){
    return this.get<Artista[]>(this.url + "Artista");
  }

  getAlbum(){
    return this.get<Album[]>(this.url + "Album");
  }

  private get<T>(fulUrl: string) : Observable<T>{
    return this.http.get<T>(fulUrl);
  }

}
