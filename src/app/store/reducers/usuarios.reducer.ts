import { Usuario } from '../../models/usuario.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from "../actions";

export class UsuariosState {
    isLoading: boolean;
    loaded: boolean;
    error: any;
    items: Usuario[];
}

const initialState: UsuariosState = { isLoading: false, loaded: false, items: [], error: null };

const _usuariosReducer = createReducer(initialState,
    on(
        actions.cargarUsuarios, state => ({ ...state, isLoading: true })
    ),
    on(
        actions.cargarUsuariosSuccess, (state, { items }) => ({ ...state, items, loaded:true, isLoading:false })
    ),
    on(
        actions.cargarUsuariosError, (state, { error }) => 
        ({ ...state, 
            error: {
                status:error.status,
                name:error.name,
                message:error.message
            }, 
            isLoading: false })
    )
);

export function usuariosReducer(state: UsuariosState, actions: Action) {
    return _usuariosReducer(state, actions);
}