import {Action, createReducer, on} from '@ngrx/store';
import {AuthState} from "./index";
import {AuthActionCreators} from "../auth.actions";


export const initialState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(
  initialState,
  on(AuthActionCreators.createLogInPageUserLoginAction, (state, action) => {
    return {user: action.user}
  }),
  on(AuthActionCreators.createTopMenuUserLogOutAction, (state, action) => {
    return {user: undefined}
  })
)

