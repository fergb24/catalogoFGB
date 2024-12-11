import { Component, OnInit } from '@angular/core';
import { CancionesService, Cancion } from '../servicios/canciones.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-repertorio-musical',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repertorio-musical.component.html',
  styleUrls: ['./repertorio-musical.component.css']
})
export class RepertorioMusicalComponent implements OnInit {
  canciones: Cancion[] = [];

  constructor(private cancionesService: CancionesService) { }

  ngOnInit(): void {
    this.cancionesService.getCanciones().subscribe(data => {
      this.canciones = data;
    });
  }
}