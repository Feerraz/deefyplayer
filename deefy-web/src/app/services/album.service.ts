import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Album } from './model/album'

@Injectable({
  providedIn: 'root'
})
export class AlbumService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }
  buscarAlbuns(){
    return this.get<Album[]>(this.url + "Album");
  }
  buscarAlbum(id: number){
    return this.get<Album>(this.url + "Album/" + id);
}
  atualizarAlbum(album: Album){
  return this.put(this.url + "Album/" + album.id, album);
}
  criarAlbum(album: Album){
  return this.post(this.url + "Album", album);
}
  excluirAlbum(id: number){
  return this.delete(this.url + "Album/" + id);
}

}

