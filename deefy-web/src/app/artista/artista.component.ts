import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Artista } from '../services/model/artista';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {
  artistas: Artista[] | undefined

  constructor(private apiServices: ApiService) { }

  ngOnInit(): void {
    this.apiServices.getArtista().subscribe(artistas =>{
      this.artistas = artistas;
    });

  }

}
