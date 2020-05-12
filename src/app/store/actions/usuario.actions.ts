import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargar = createAction('[Usuario] cargar',
props<{id:number}>());

export const cargarSuccess = createAction('[Usuario] cargar success',
props<{user:Usuario}>());

export const cargarError = createAction('[Usuario] cargar error',
props<{error:any}>());