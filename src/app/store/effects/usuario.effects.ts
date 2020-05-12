import { Injectable } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {
    constructor(
        private _usuarioService: UsuarioService,
        private _actions$: Actions) { }

    get$ = createEffect(
        ()=> this._actions$.pipe(
            ofType(usuarioActions.cargar),
            mergeMap(usuarioAction => this._usuarioService.get(usuarioAction.id)),
            map(user=> usuarioActions.cargarSuccess({user})),
            catchError(error => of(usuarioActions.cargarError({error})))
        ))
}