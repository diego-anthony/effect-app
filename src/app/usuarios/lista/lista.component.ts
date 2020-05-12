import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { UsuariosEffects } from '../../store/effects/usuarios.effects';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  isLoading:boolean;
  error:any;
  usuarios:Usuario[] = [];

  constructor(
    private _store:Store<AppState>
  ) { }

  ngOnInit(): void {
    this._store.select('usuarios').subscribe(({items,error,isLoading}) => {
      this.error = error;
      this.isLoading = isLoading;
      this.usuarios = items;
    });

    this._store.dispatch(cargarUsuarios());
  }

}
