import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Album } from '../services/model/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  albums: Album[] | undefined

  constructor(private apiServices: ApiService) { }

  ngOnInit(): void {
    this.apiServices.getAlbum().subscribe(albums =>{
      this.albums = albums;
    });

  }

}
