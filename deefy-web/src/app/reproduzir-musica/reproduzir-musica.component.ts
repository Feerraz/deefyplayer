import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicaService } from '../services/musica.service';

@Component({
  selector: 'app-reproduzir-musica',
  templateUrl: './reproduzir-musica.component.html',
  styleUrls: ['./reproduzir-musica.component.scss']
})
export class ReproduzirMusicaComponent implements OnInit {
  id: any;
  arquivoMusica: any;
  apiLoaded: boolean = false;
  constructor(private musicaService: MusicaService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {

      this.id = Number(params.get('id'));
      if (this.id > 0){
        this.musicaService.buscarMusica(this.id).subscribe(musica =>{
          this.arquivoMusica = musica.arquivoMusica; console.log;
        });
      }
    });
 }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

}
