import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

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
}
