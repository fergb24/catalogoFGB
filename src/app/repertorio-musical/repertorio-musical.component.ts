import { Component, OnInit } from '@angular/core';
import { CancionesService, Cancion } from '../servicios/canciones.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-repertorio-musical',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './repertorio-musical.component.html',
  styleUrls: ['./repertorio-musical.component.css']
})
export class RepertorioMusicalComponent implements OnInit {
  canciones: Cancion[] = [];
  filteredCanciones: Cancion[] = [];
  generos: string[] = [];
  generoSeleccionado: string = 'Todos';

  constructor(private cancionesService: CancionesService) { }

  ngOnInit(): void {
    this.cancionesService.getCanciones().subscribe(data => {
      this.canciones = data;
      this.filteredCanciones = data;
      this.generos = ['Todos', ...new Set(data.map(cancion => cancion.genero))];
    });
  }

  filtrarPorGenero(): void {
    if (this.generoSeleccionado === 'Todos') {
      this.filteredCanciones = this.canciones;
    } else {
      this.filteredCanciones = this.canciones.filter(
        cancion => cancion.genero === this.generoSeleccionado
      );
    }
  }
}