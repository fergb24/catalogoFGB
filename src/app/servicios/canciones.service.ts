import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cancion {
  titulo: string;
  genero: string;
  autor: string;
}

@Injectable({
  providedIn: 'root'
})
export class CancionesService {
  private apiUrl = 'http://localhost:3000/canciones';

  constructor(private http: HttpClient) { }

  getCanciones(): Observable<Cancion[]> {
    return this.http.get<Cancion[]>(this.apiUrl);
  }
}