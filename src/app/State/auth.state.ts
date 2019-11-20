import { Login } from '../models/Login/login';

export default class AuthState {
    user: Login;
    isAuthenticated: boolean;
}

export const initializeState = () => {
    return { user: {}, isAuthenticated: false };
};