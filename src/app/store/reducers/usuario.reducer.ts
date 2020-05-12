import { Usuario } from '../../models/usuario.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as usuarioActions from '../actions';

export class UsuarioState{
    id?:number;
    isLoading:boolean;
    user:Usuario;
    error:any;
}


const initialState:UsuarioState = {
    user:null,
    error:null,
    isLoading:false
}

const _usuarioReducer = createReducer(initialState,
    on(usuarioActions.cargar, (state,{id}) => ({...state, isLoading:true, id})),
    on(usuarioActions.cargarSuccess, (state, {user})=>({...state, user:{...user}, isLoading:false})),
    on(usuarioActions.cargarError, (state, {error})=>({...state,error:error,isLoading:false}))
    );

export function usuarioReducer(state:UsuarioState,action:Action){
    return _usuarioReducer(state, action);
}