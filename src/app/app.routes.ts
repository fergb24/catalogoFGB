import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RepertorioMusicalComponent } from './repertorio-musical/repertorio-musical.component';

export const routes: Routes = [

   {path: 'Inicio', component: InicioComponent},
   {path: 'RepertorioMusical', component: RepertorioMusicalComponent}, 
];
