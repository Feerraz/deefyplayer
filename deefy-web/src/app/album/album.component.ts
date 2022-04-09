import { HttpClient, HttpHandler } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Album } from '../services/model/album';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albuns: Album[] | undefined;


  constructor(private albumService: AlbumService, private router: Router) {

  }

  ngOnInit(): void {
    this.Load();
  }

  Load(){
    this.albumService.buscarAlbuns().subscribe(album => {
      this.albuns = album;
    });
  }

  editar(id:any){
    this.router.navigate(['/editar-album', { id: id }]);
  }

  excluir(id: any){
    this.albumService.excluirAlbum(Number(id)).subscribe(() => {
      alert("Album excluido com sucesso");
      this.Load();
    });
  }
}
