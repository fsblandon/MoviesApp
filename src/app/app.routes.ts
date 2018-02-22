import { RouterModule, Routes } from "@angular/router";

import { PeliculaComponent } from "./components/pelicula/pelicula.component";
import { BuscarComponent } from "./components/buscar/buscar.component";
import { HomeComponent } from "./components/home/home.component";

const app_routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'pelicula/:id/:pag', component: PeliculaComponent},
    {path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent},
    {path: 'buscar', component: BuscarComponent},
    {path: 'buscar/:texto', component: BuscarComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);