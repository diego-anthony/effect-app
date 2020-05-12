import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import * as usuarioActions from '../../store/actions/usuario.actions';
import { AppState } from '../../store/app.reducer';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  user: Usuario;
  isLoading:boolean = false;
  error:any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this._store.select('usuario').subscribe(({user, isLoading, error})=>{
      this.user = user;
      this.isLoading = isLoading;
      this.error = error;
    })

    this._activatedRoute.params.subscribe(({id}) => {
      this._store.dispatch(usuarioActions.cargar({id}));
    });
  }

}
