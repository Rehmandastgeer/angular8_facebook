import { Action, createReducer, on } from '@ngrx/store';
import AuthState, { initializeState } from '../State/auth.state';
import {login} from '../Actions/auth.action';
import { User } from '../models/user/user';

export const initialState = initializeState();
const reducer = createReducer(
    initialState,
    on(login, (state: AuthState, user: User) => {
        console.log('login reducer', user);
        return {user: user, isAuthenticated: Object.keys(user).length > 0 };
    }),
);
export function AuthReducer(state: AuthState | undefined, action: Action) {
    return reducer(state, action);
}