import {createAction,props} from '@ngrx/store';
import {User} from '../models/user/user';

export const login=createAction('[login] - login User', props<User>()); 
// export const GetuserLoginAction = createAction('[User] - Get Login');
// export const BegincreateUserloginAuthAction=createAction('[Login] Begin Create Action', props<{payload:Login}>());