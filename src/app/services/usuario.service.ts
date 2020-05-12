import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

const urlBase = "https://reqres.in/api"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private _httpClient: HttpClient
  ) { }


  getAll() {
    const url = `${urlBase}/users`;
    return this._httpClient.get(url).pipe(
      map(x => x['data'])
    );
  }

  get(id: number):Observable<Usuario> {
    const url = `${urlBase}/users/${id}`;
    return this._httpClient.get(url).pipe(
      map(x => x['data'])
    );
  }
}
