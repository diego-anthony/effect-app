import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { UsuarioService } from '../../services/usuario.service';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions/usuarios.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {
    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ) { }

    getAll$ = createEffect(
        () => this.actions$.pipe(
            ofType(cargarUsuarios),
            mergeMap(() => this.usuarioService.getAll()),
            map(users => cargarUsuariosSuccess({ items: users })),
            catchError(error => of(cargarUsuariosError({error})))
        )
    )
}