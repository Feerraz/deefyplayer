import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Genero } from '../services/model/genero';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.scss']
})
export class GeneroComponent implements OnInit {
  generos: Genero[] | undefined

  constructor(private apiServices: ApiService) { }

  ngOnInit(): void {
    this.apiServices.getGenero().subscribe(generos =>{
      this.generos = generos;
    });

  }

}
