import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html'
})
export class BuscaComponent implements OnInit {

  heroe: any[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino']);
      console.log( this.heroes );
    } );

  }

}
