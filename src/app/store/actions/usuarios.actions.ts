import { createAction, props } from "@ngrx/store";
import { Usuario } from '../../models/usuario.model';
export const cargarUsuarios = createAction('[Usuarios] cargar usuarios');

export const cargarUsuariosSuccess = createAction('[Usuarios] cargar usuarios success',
        props<{items:Usuario[]}>());

export const cargarUsuariosError = createAction('[Usuarios] cargar usuarios error',
    props<{error:any}>())