import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula:any;
  regresar:string = "";
  busqueda:string = "";

  constructor(public _ps:PeliculasService, public route:ActivatedRoute) {

    this.route.params.subscribe(params => {
      console.log(params);
      this.regresar = params['pag'];

      if (params['busqueda']) {
        this.busqueda = params['busqueda'];
      }

      this._ps.getPelicula(params['id'])
        .subscribe( pelicula => this.pelicula = pelicula);
    });
  }

  ngOnInit() {
  }

}
