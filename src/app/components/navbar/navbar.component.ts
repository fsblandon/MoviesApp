import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  buscarPelicula(text:string){
    if (text.length == 0) {
      return;
    } else {
      this.router.navigate(['buscar',text]);
    }
  }

}
