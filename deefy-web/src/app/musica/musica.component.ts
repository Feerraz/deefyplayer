import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Musica } from '../services/model/musica';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.scss']
})
export class MusicaComponent implements OnInit {
  musicas: Musica[] | undefined

  constructor(private apiServices: ApiService) { }

  ngOnInit(): void {
    this.apiServices.getMusica().subscribe(musicas =>{
      this.musicas = musicas;
    });

  }

}
